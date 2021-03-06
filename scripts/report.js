$('#header').hide()
main()

async function main()
{

    await liff.init({liffId: "1655595874-RxwxJLN7"}) // Use own liffId})
    if (liff.isLoggedIn()) {
        // Login แล้วจ้า
      } else {
        liff.login()
      }


}

function shared()
{
    liff.shareTargetPicker([
    
        {
            "type": "text",
            "text": "Messages from Share Target Picker"
        }])
}

async function makemessage(lat,long,peano,place,observ,customername,tel)
{
  var mess = {
                "type": "bubble",
                    "hero": {
                                "type": "image",
                                "url": "https://cscn.herokuapp.com/pic/poweroutageflex.png",
                                "size": "full",
                                "aspectRatio": "20:13",
                                "aspectMode": "cover",
                                "action": {
                                            "type": "uri",
                                            "uri": "http://linecorp.com/"
                                            }
                            },
                    "body": {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "แจ้งกระแสไฟฟ้าขัดข้อง",
                                                    "color":"#703E91",
                                                    "weight": "bold",
                                                    "size": "xl"
                                                },                            
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "margin": "lg",
                                                    "spacing": "sm",
                                                    "contents": [
                                                                    {
                                                                        "type": "box",
                                                                        "layout": "baseline",
                                                                        "spacing": "sm",
                                                                        "contents": [
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "PEA มิเตอร์ :",
                                                                                        "color": "#06d6a0",
                                                                                        "weight": "bold",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": peano,
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 2
                                                                                        }
                                                                                    ]
                                                                    },            
                                                                    {
                                                                        "type": "box",
                                                                        "layout": "baseline",
                                                                        "spacing": "sm",
                                                                        "contents": [
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "สถานที่ :",
                                                                                        "color": "#06d6a0",
                                                                                        "weight": "bold",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": place,
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 2
                                                                                        }
                                                                                    ]
                                                                    },
                                                                    {
                                                                        "type": "box",
                                                                        "layout": "baseline",
                                                                        "spacing": "sm",
                                                                        "contents": [
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "จุดสังเกตุ",
                                                                                        "color": "#06d6a0",
                                                                                        "weight": "bold",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": observ,
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 2
                                                                                        }
                                                                                    ]
                                                                    },
                                                                    {
                                                                        "type": "box",
                                                                        "layout": "baseline",
                                                                        "spacing": "sm",
                                                                        "contents": [
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "ผู้แจ้ง",
                                                                                        "color": "#06d6a0",
                                                                                        "weight": "bold",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": customername,
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 2
                                                                                        }
                                                                                    ]
                                                                    },
                                                                    {
                                                                        "type": "box",
                                                                        "layout": "baseline",
                                                                        "spacing": "sm",
                                                                        "contents": [
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "โทรศัพท์",
                                                                                        "color": "#06d6a0",
                                                                                        "weight": "bold",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": tel,
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 2
                                                                                        }
                                                                                    ]
                                                                    }
                                                                ]
                                                    }
                                                ]
                                },
                        "footer": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "spacing": "sm",
                                    "contents": [
                                                    {
                                                        "type": "button",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "action": {
                                                                    "type": "uri",
                                                                    "label": "แผนที่",
                                                                    "uri": "https://www.google.co.th/maps/search/" + lat + "," + long
                                                        }
                                                    },
                                                        {
                                                            "type": "spacer",
                                                            "size": "sm"
                                                        }
                                    ],
                                    "flex": 0
                        }
            }
return mess

}