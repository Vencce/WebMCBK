<script setup>
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

const props = defineProps({
  valor: Number,
  nome: String,
  chavePix: String,
  cidade: {
    type: String,
    default: 'JOINVILLE',
  },
})

// Função para calcular CRC16 CCITT (padrão Pix)
function crc16(payload) {
  let crc = 0xffff
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1
      crc &= 0xffff
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0')
}

function encodeField(id, value) {
  const len = value.length.toString().padStart(2, '0')
  return `${id}${len}${value}`
}

const qrCodeUrl = ref('')

onMounted(() => {
  // Monta os campos do payload
  const chaveField = encodeField('01', props.chavePix)
  const merchantAccountInfo = encodeField('26', encodeField('00', 'BR.GOV.BCB.PIX') + chaveField)
  const merchantName = encodeField('59', props.nome.toUpperCase())
  const merchantCity = encodeField('60', props.cidade.toUpperCase())
  const valueField = props.valor > 0 ? encodeField('54', props.valor.toFixed(2)) : ''

  // Monta o payload sem o CRC (campo 63)
  const payloadSemCRC =
    '000201' +
    merchantAccountInfo +
    '52040000' +
    '5303986' +
    valueField +
    merchantName +
    merchantCity +
    '62070503***' + // Pode ser usado para adicionar info adicional, deixei fixo
    '63' +
    '04' 

  const crc = crc16(payloadSemCRC)

  const payload = payloadSemCRC + crc

  QRCode.toDataURL(payload, { width: 300 }, (err, url) => {
    if (!err) qrCodeUrl.value = url
  })
})
</script>

<template>
  <div class="pix-container">
    <h3>Escaneie o QR Code para pagar:</h3>
    <img :src="qrCodeUrl" v-if="qrCodeUrl" alt="QR Code Pix" />
  </div>
</template>

<style scoped>
.pix-container {
  text-align: center;
  margin-top: 2rem;
}
img {
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}
</style>
