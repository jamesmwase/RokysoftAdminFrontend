let pages = {
    index: '/app/',
    heats: '/app/heats',
    favorites: '/app/favorites',
    profile: '/app/profile',
    auth: {
        signin: {
            index: '/app/signin',
            usingFb: '/app/signin/using_fb',
            usingEmail: '/app/signin/using_email',
        },
        signup: {
            usingFb: '/app/signip/using_fb',
            usingEmail: '/app/signup/using_email',
        },
    },
    password: {
        update: '/app/password/update'
    },
    verificationPin: '/app/verification_pin',
    user: {
        users: '/app/users',
    },
};
export default pages;
