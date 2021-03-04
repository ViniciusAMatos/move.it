import NextAuth from 'next-auth';

import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Provider.Twitter({
    //   clienteId: "",
    //   clientSecret: ""

    // }),
    // Provider.Email({
    //   server: {
    //     host: "",
    //     port: "",
    //     auth: {
    //       user: "",
    //       pass: "",
    //     }
    //   },
    //   form: "",

    // }),
  ],





  // database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);