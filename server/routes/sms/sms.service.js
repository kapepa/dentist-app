const SMSru = require('sms_ru');

const SmsService = {
  send: async (number, date) => {
    const sms = new SMSru('2BD79A31-45BC-B9E1-A739-812922B2CCBB');
    const time = new Date(date);
    const hour = time.getHours();
    const minutes = time.getMinutes();

    const sender = sms.sms_send({
      to: number,
      text: `${hour < 10 ? '0' + hour : hour }:${minutes < 10 ? '0' + minutes : minutes}`,
      from: 'Dentist',
    }, function(e){
      console.log(e.description);
    });
    console.log(sender)
    return sender;
  }
}

module.exports = SmsService;