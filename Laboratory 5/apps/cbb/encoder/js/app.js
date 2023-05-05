var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit,
        encodeType: "",
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodeType = "BL"
            switch(this.encodeType.toString()){
                case 'manchester-level':
                    this.encodedBits = getManchesterLevelEncoding(this.bits);
                    break;
                case 'NRZ-L':
                     this.encodedBits = nonReturnToZeroLevel(this.bits);
                     break;
                case 'NRZ-M':
                    this.encodedBits = nonReturnToZeroMark(this.bits);
                    break;
                case 'NRZ-S':
                    this.encodedBits = nonReturnToZeroSpace(this.bits);
                    break;
                case 'RZ':
                    this.encodedBits = returnToZero(this.bits);
                    break;
                case 'BL':
                    this.encodedBits = byphaseLevel(this.bits);
                    break;
        }
    }
}
});
