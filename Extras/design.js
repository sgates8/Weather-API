class ButterflyKisses {
    constructor() {
      this.perfume = []
    }

    log(night) {
      this.perfume.push(smells.likeWhat)
    }
  }


  class ButterflyKissesSingleton {
    constructor() {
      if (!ButterflyKissesSingleton.instance) {
        ButterflyKissesSingleton.instance = new ButterflyKisses()
      }
    }

    getButterflyKissesInstance() {
      return ButterflyKissesSingleton.instance
    }
  }

  module.exports = ButterflyKissesSingleton
