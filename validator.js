const validator = {

  isValid: function (creditCardNumber) {

    const cardNumberArray = Array.from(creditCardNumber)
    const reversed = cardNumberArray.reverse()
    let totalSum = 0

    for (let index = 0; index < reversed.length; index++) {

      if (index % 2 !== 0) {
        reversed[index] = (Number(reversed[index])) * 2

        if (reversed[index] > 9) {
          (reversed[index]) = (reversed[index] - 9)

          totalSum = totalSum + Number(reversed[index])

        } else {
          totalSum = totalSum + Number(reversed[index])
        }

      } else {
        totalSum = totalSum + Number(reversed[index])
      }
    }
    if (totalSum % 10 === 0) {
      return true
    } else {
      return false
    }
  },

  maskify: function (number) {
    const lastFourNumber = 4
    let mask = ""
    for (let index = 0; index < number.length; index++) {
      if (index >= ((number.length) - lastFourNumber)) {
        mask = mask + number.charAt(index)
      } else {
        mask = mask + "#"
      }
    }
    return mask
  }

}

export default validator;

