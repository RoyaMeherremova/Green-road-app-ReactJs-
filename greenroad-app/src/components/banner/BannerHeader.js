import React from 'react'

function BannerHeader() {
    const header = {
        marginLeft: "10px",
        color: "hsl(136, 62%, 7%)",
        fontSize: "30px",
        lineHeight: "1.5",
        fontWeight: "700",
        color: "hsl(136, 62%, 7%)",
        fontFamily: "DM sans, sans-serif"

    };
    return (
        <div>
            <h2 style={header} className=' mt-5'>Why choose Tourz</h2>

        </div>
    )
}

export default BannerHeader
