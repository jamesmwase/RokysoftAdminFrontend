import currentEnv from "../env/get-current-env";

export default function log(info, info2) {
  if (currentEnv !== 'production') {
    console.log(info, info2 ? info2 : '');
  }
};
