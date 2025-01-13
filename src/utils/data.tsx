interface marquees_content {
    name: string,
    image: string
}
export interface faq_content {
    question: string,
    answer: string
}
export const data : marquees_content[]  = [
    { name: "apple", image: '/assets/marquees/apple.png' },
    { name: "samsung", image: '/assets/marquees/samsung.png' },
    { name: "android", image: '/assets/marquees/android.png' },
    { name: "roku", image: '/assets/marquees/roku.png' },
    { name: "sony", image: '/assets/marquees/sony.png' },
    { name: "windows", image: '/assets/marquees/windows.png' },
];

export const data3 : marquees_content[]  = [
    { name: 'allplayer', image: '/assets/allplayer.svg' },
    { name: 'bobplayer', image: '/assets/bobplayer.svg' },

    { name: 'hushplayer', image: '/assets/hushplayer.svg' },
    { name: 'ibosol', image: '/assets/ibosol.svg' },
    { name: 'iboss', image: '/assets/iboss.svg' },
    { name: 'iboxx', image: '/assets/iboxx.svg' },
    { name: 'kingiptv', image: '/assets/kingiptv.svg' },

    { name: 'macplayer', image: '/assets/macplayer.svg' },
    { name: 'virginia', image: '/assets/virginia.svg' },
];

export const faq_data:faq_content[] = [
    {
        question: '¿Does IBO PLAYER contain any channels? Where can I get a good playlist?',
        answer: "IBO PLAYER APP and any administrator do not help you to get find a good playlist. Also, we don't provide any kind of playlists. We are not responsible for the content uploaded to our APP. Please don't buy the app when you don't have any playlist or Media for the APP, because no channels are included after the activation in this app. Your payment will not be refunded if you buy it without having any list or something is not working."
    },
    {
        question: '¿My MAC address has changed after I switched to another connection type.?',
        answer: "Each TV has 2 MAC addresses (1st is WiFi, 2nd is Ethernet) and a 2nd MAC has activated automatically after you switch to another connection type and restart the app. MAC address is unique for every TV and cannot be changed manually."
    },
    {
        question: '¿Why is the app not working when the PLAYLIST worked on my computer?',
        answer: "This can be caused because of the ISP lock if your computer is on a different Network. But when the network is the same as your computer and it is not working it can be caused because of your TV`s supported format. Not every Smart-TV supports all contents. Every TV model is totally different or may not support specific stream formats!"
    },
    {
        question: '¿My playlist won\'t open, freezes or slows down. What to do?',
        answer: "Make sure your playlist is working and active, that it has no limitations or problems. For privacy reasons we do not have access to the playlists, we do not provide any assistance on them."
    },
    {
        question: '¿Why I can not start the APP?',
        answer: "This is maybe because of your internet connection, please check at first your internet connection before you contact your provider. Many times it is caused because of the connection and not because of the provider!"
    },
    {
        question: '¿Does the IBO PLAYER APP have an EPG-SYSTEM?',
        answer: "No, the app didn`t have an EPG system integrated but if your provider has an EPG - READY system then it would work with our platform."
    },
    {
        question: '¿"Unable to Stream" Error sorry playlist not working . This message appears when there are restrictions on a playlist.?',
        answer: "For privacy reasons we do not have access to the playlists, we do not provide any assistance on them."
    }
]
