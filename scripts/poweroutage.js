$('#header').hide()

liff
  .init({
    liffId: "1655595874-nBDB6Y1G" // Use own liffId
  })


var link = ""
getLocation()
function sendpoweroutage()
{
    console.log(link)
    liff.sendMessages([
                        {
                            type: "flex",
                            altText: "this is a flex message",
                            contents:mess
                        }
      ])
      .catch((err) => {
        alert(err);
      })

    alert("test8888")
}

function getLocation() 
{
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else 
    { 
      var text = "Geolocation is not supported by this browser."
    }
} 
function showPosition(position) 
{
    link = "https://www.google.co.th/maps/search/"+position.coords.latitude+","+position.coords.longitude 
    $('#btnSend').prop('disabled',false)
  }
  var mess = {
                "type": "bubble",
                    "hero": {
                                "type": "image",
                                "url": "pic/poweroutageflex",
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
                                                    "text": "Brown Cafe",
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
                                                                                        "color": "#aaaaaa",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "5690089999",
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 5
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
                                                                                        "color": "#aaaaaa",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "ซอยดงไก่ดี",
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 5
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
                                                                                        "color": "#aaaaaa",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "บ้านหลังสีฟ้าขวามือจากปากซอย 200 เมตร",
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 5
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
                                                                                        "color": "#aaaaaa",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "นายนัทธพงศ์ เจริญกิจพิเชียร",
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 5
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
                                                                                        "text": "หมายเลขโทรศัพท์",
                                                                                        "color": "#aaaaaa",
                                                                                        "size": "sm",
                                                                                        "flex": 1
                                                                                        },
                                                                                        {
                                                                                        "type": "text",
                                                                                        "text": "0955579848",
                                                                                        "wrap": true,
                                                                                        "color": "#666666",
                                                                                        "size": "sm",
                                                                                        "flex": 5
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
                                                                    "label": "โทร",
                                                                    "uri": "https://linecorp.com"
                                                        }
                                                    },
                                                    {
                                                        "type": "button",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "action": {
                                                                    "type": "uri",
                                                                    "label": "แผนที่",
                                                                    "uri": "https://linecorp.com"
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