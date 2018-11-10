const sendGrid = require("sendgrid");
const sgMail = sendGrid.mail;
const apiKey = require("../config/keys").sendGridKey;

class Mailer extends sgMail.Mail {
  constructor({ subject, recipients }, content) {
    super();
    this.sgApi = sendGrid(apiKey);
    this.from_email = new sgMail.Email("no-reply@survey-app.com");
    this.subject = subject;
    this.body = new sgMail.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }
  formatAddresses(recipients) {
    return recipients.map(rec => new sgMail.Email(rec.email));
  }
  addClickTracking() {
    const trackingSettings = new sgMail.TrackingSettings();
    const clickTracking = new sgMail.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients() {
    const personalize = new sgMail.Personalization();
    this.recipients.forEach(rec => {
      personalize.addTo(rec);
    });
    this.addPersonalization(personalize);
  }
  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON()
    });
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
