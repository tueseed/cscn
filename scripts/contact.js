$('#header').hide()
liff
  .init({
    liffId: "1655595874-03WvDLp6" // Use own liffId
  })

  sendcontact()

  function sendcontact()
  {
      var flexmes = makemessage()
      liff.sendMessages([
                          {
                              type: "flex",
                              altText: "ข้อมูลการติดต่อ",
                              contents:flexmes
                          }
        ])
        .catch((err) => {
          alert(err);
        })
      liff.closeWindow()
  }
  



function makemessage()
{

    var mess = {
                "type": "bubble",
                "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                                    {
                                    "type": "text",
                                    "text": "ข้อมูลการติดต่อ",
                                    "weight": "bold",
                                    "size": "xl"
                                    },
                                    {
                                    "type": "box",
                                    "layout": "baseline",
                                    "margin": "md",
                                    "contents": [
                {
                  "type": "icon",
                  "size": "xl",
                  "url": "https://cscn.herokuapp.com/pic/phone.png"
                },
                {
                  "type": "text",
                  "text": "032-231-044 (ระบบอัตโนมัติ)",
                  "size": "md",
                  "color": "#999990",
                  "margin": "md",
                  "flex": 0,
                  "offsetTop": "none"
                }
              ]
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
                      "type": "icon",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "text",
                      "text": "แจ้งกระแสไฟฟ้าขัดข้อง",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "กด 1",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "offsetStart": "none"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "icon",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "text",
                      "text": "แผนกบัญชี",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "กด 2",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "offsetStart": "none"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "icon",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "text",
                      "text": "แผนกมิเตอร์",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "กด 3",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 1
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "icon",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "text",
                      "text": "แผนกบริการลูกค้า",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "กด 4",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 1
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "icon",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                    },
                    {
                      "type": "text",
                      "text": "ติดต่อเจ้าหน้าที่",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "กด 0",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
return mess

}