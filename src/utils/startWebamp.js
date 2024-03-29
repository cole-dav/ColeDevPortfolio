import Webamp from 'webamp'

const startWebamp = () => {
    if (Webamp.browserIsSupported()) {
        const webamp = new Webamp({
            initialTracks: [
            {
                metaData: {
                    artist: "BabyTron",
                    title: "Melrose"
                },
                url: `${process.env.PUBLIC_URL}/Babytron-Melrose.mp3`,
                duration: 81,
            },
            {
                metaData: {
                    artist: "Untitled",
                    title: "mystery"
                },
                url: `${process.env.PUBLIC_URL}/DIAND.mp3`,
                duration: 143,
            },
            {
                metaData: {
                    artist: "Drake",
                    title: "The Winner"
                },
                url: `${process.env.PUBLIC_URL}/Drake-Winner.mp3`,
                duration: 277,
            },
            {
                metaData: {
                    artist: "Lil Yachty",
                    title: "drive ME crazy!"
                },
                url: `${process.env.PUBLIC_URL}/Lil-Yachty-drive-ME-crazy!.mp3`,
                duration: 247,
            },
            {
                metaData: {
                    artist: "Sony",
                    title: "Jungle Mix"
                },
                url: `${process.env.PUBLIC_URL}/jungle.mp3`,
                duration: 3729,
            },
        ]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));
        
    }
}

export { startWebamp } 