export const Login_Action = async (data) => {
  "use server";
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  //check with db
  console.log("Login Submitted");
};

export const SignUp_Action = async (data) => {
  "use server";
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  //register with db
  console.log("Registiration Submitted");
};
