import SignInForm from '@/components/login/SignInForm.vue';
import SignUpForm from '@/components/login/SignUpForm.vue';
import { guestLogin } from '@/api/user';

let vm;

export default {
  data() {
    return {
      googleLoginUrl: `${process.env.VUE_APP_API_URL}/oauth2/authorization/google`,
      activeIdx: 0,
    };
  },
  created() {
    vm = this;
  },
  components: {
    SignInForm,
    SignUpForm,
  },
  methods: {
    slideForm,
    fnGuestLogin,
  },
};

function slideForm(event) {
  document.querySelectorAll('.btn-toggle').forEach((node, idx) => {
    if (event.target == node) vm.activeIdx = idx;
  });
}

async function fnGuestLogin() {
  await guestLogin();
}
