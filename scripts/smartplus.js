$('#header').hide()

liff
  .init({
    liffId: "1655595874-0poKDg98" // Use own liffId
  })
  .then(() => {
    liff.getOs().then(osname => {
                                        const os = osname
                                        alert(os)
                            })
  })