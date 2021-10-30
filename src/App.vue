<template>
  <body>
    <h1>Elegant Contact Form.</h1>
    <div class="info">
      <a href="https://www.grandvincent-marion.fr" target="_blank"
        ><p>Made with <i class="fa fa-heart"></i> by Marion Grandvincent</p></a
      >
    </div>

    <form>
      <h1>
        Should you have any questions, please do not hesitate to contact me :
      </h1>

      <div class="contentform">
        <div id="sendmessage">
          Your message has been sent successfully. Thank you.
        </div>
      </div>

      <ValidationObserver>
        <template slot-scope="{ valid }">
          <form @submit.prevent="doAction()">
            <div class="leftcontact">
              <ValidationProvider
                name="Name"
                :rules="{ required: true, regex: validate.regex.surname }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>Surname<span>*</span></p>
                    <span class="icon-case"><i class="fa fa-male"></i></span>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      data-rule="required"
                      data-msg="Vérifiseigné."
                      v-model="validate.surname"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.surname }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>

              <ValidationProvider
                name="Name"
                :rules="{ required: true, regex: validate.regex.name }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>Name<span>*</span></p>
                    <span class="icon-case"><i class="fa fa-user"></i></span>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.name"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.name }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>

              <ValidationProvider
                name="Name"
                :rules="{
                  required: true,
                  regex: validate.regex.email,
                }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>email<span>*</span></p>
                    <span class="icon-case"
                      ><i class="fa fa-envelope-o"></i
                    ></span>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.email"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.email }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>

              <ValidationProvider
                name="Name"
                :rules="{ required: true, regex: validate.regex.company }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>Company<span>*</span></p>
                    <span class="icon-case"><i class="fa fa-home"></i></span>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.company"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.company }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>

              <ValidationProvider
                name="Name"
                :rules="{ required: true, regex: validate.regex.companyAddress }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>Company Address<span>*</span></p>
                    <span class="icon-case"
                      ><i class="fa fa-location-arrow"></i
                    ></span>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.companyAddress"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.companyAddress }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>
            </div>

            <div class="rightcontact">
              <ValidationProvider
                name="Name"
                :rules="{ required: true, regex:  validate.regex.city }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>City<span>*</span></p>
                    <span class="icon-case"
                      ><i class="fa fa-building-o"></i
                    ></span>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.city"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.city }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>

              <ValidationProvider
                name="Name"
                :rules="{ required: true, regex: validate.regex.phone }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>Phone number<span>*</span></p>
                    <span class="icon-case"><i class="fa fa-phone"></i></span>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.phone"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.phone }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>

              <ValidationProvider
                name="Name"
                :rules="{ required: true, regex: validate.regex.func }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>Function<span>*</span></p>
                    <span class="icon-case"><i class="fa fa-info"></i></span>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.func"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.func }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>
              <ValidationProvider
                name="Name"
                :rules="{ required: true, regex: validate.regex.subject }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>Subject<span>*</span></p>

                    <span class="icon-case"
                      ><i class="fa fa-comment-o"></i
                    ></span>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.subject"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.subject }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>

              <ValidationProvider
                name="Name"
                :rules="{
                  required: true,
                  regex: validate.regex.message,
                }"
              >
                <template slot-scope="{ errors }">
                  <div class="form-group">
                    <p>Message<span>*</span></p>
                    <span class="icon-case"><i class="fa fa-user"></i></span>
                    <textarea
                      type="text"
                      name="prenom"
                      id="prenom"
                      data-rule="required"
                      data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                      v-model="validate.message"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ validate.messages.message }}
                    </div>
                  </div>
                </template>
              </ValidationProvider>
            </div>
            <button type="submit" :disabled="!valid" class="bouton-contact">
              Send
            </button>
          </form>
        </template>
      </ValidationObserver>
    </form>
  </body>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      validate: {
        surname: null,
        name: null,
        email: null,
        company: null,
        companyAddress: null,
        city: null,
        phone: null,
        func: null,
        subject: null,
        message: null,
        messages: {
          surname: "введите фамилию",
          name: "введите имя",
          email: "введите email в формате example@example.com",
          company: "введите Вашу компанию",
          companyAddress: "введите адрес компании",
          city: "введите город",
          phone: "введите телефонв формате 8xxxxxxxxxx",
          func: "введите функцию",
          subject: "введите subject",
          message: "введите сообщение",
        },
        regex: {
          surname: /[A-Za-zА-ЯЁ]$/i,
          name: /[A-Za-zА-ЯЁ]$/i,
          email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          company: /[A-Za-z0-9А-ЯЁ]$/i ,
          companyAddress: /[A-Za-z0-9А-ЯЁ]$/i ,
          city: /[A-Za-z0-9А-ЯЁ]$/i,
          phone:  /^\d{11}$/ ,
          func: /[A-Za-zА-ЯЁ]$/i,
          subject: /[A-Za-z0-9А-ЯЁ]$/i,
          message: /[A-Za-z0-9А-ЯЁ-]+$/i,
        },
      },
    };
  },

  methods: {
    doAction() {
      alert("Форма отправлена");
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background: #eaeaea;
  font-family: "Open Sans", sans-serif;
}

.info p {
  text-align: center;
  color: #999;
  text-transform: none;
  font-weight: 600;
  font-size: 15px;
  margin-top: 2px;
}

.info i {
  color: #f6aa93;
}
form h1 {
  font-size: 18px;
  background: #f6aa93 none repeat scroll 0% 0%;
  color: rgb(255, 255, 255);
  padding: 22px 25px;
  border-radius: 5px 5px 0px 0px;
  margin: auto;
  text-shadow: none;
  text-align: left;
}

form {
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
  margin: 5% auto;
  background-color: #ffffff;
  overflow: hidden;
}

p span {
  color: #f00;
}

p {
  margin: 0px;
  font-weight: 500;
  line-height: 2;
  color: #333;
}

h1 {
  text-align: center;
  color: #666;
  text-shadow: 1px 1px 0px #fff;
  margin: 50px 0px 0px 0px;
}

input {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  width: 75%;
  height: 40px;
  float: left;
  padding: 0px 15px;
}

a {
  text-decoration: inherit;
}

textarea {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin: 0;
  width: 75%;
  height: 130px;
  float: left;
  padding: 0px 15px;
}

.form-group {
  overflow: hidden;
  clear: both;
}

.icon-case {
  width: 35px;
  float: left;
  border-radius: 5px 0px 0px 5px;
  background: #eeeeee;
  height: 42px;
  position: relative;
  text-align: center;
  line-height: 40px;
}

i {
  color: #555;
}

.contentform {
  padding: 40px 30px;
}

.bouton-contact {
  background-color: #81bda4;
  color: #fff;
  text-align: center;
  width: 100%;
  border: 0;
  padding: 17px 25px;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
  margin-top: 40px;
  font-size: 18px;
}

.leftcontact {
  width: 49.5%;
  float: left;
  border-right: 1px dotted #ccc;
  box-sizing: border-box;
  padding: 0px 0px 0px 15px;
}

.rightcontact {
  width: 49.5%;
  float: right;
  box-sizing: border-box;
  padding: 0px 15px 0px px;
}

.validation {
  display: none;
  margin: 0 0 10px;
  font-weight: 400;
  font-size: 13px;
  color: #de5959;
}

#sendmessage {
  border: 1px solid #fff;
  display: none;
  text-align: center;
  margin: 10px 0;
  font-weight: 600;
  margin-bottom: 30px;
  background-color: #ebf6e0;
  color: #5f9025;
  border: 1px solid #b3dc82;
  padding: 13px 40px 13px 18px;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.03);
}

#sendmessage.show,
.show {
  display: block;
}

.error {
  color: red;
}
</style>