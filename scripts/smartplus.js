$('#header').hide()

liff
  .init({
    liffId: "1655595874-0poKDg98" // Use own liffId
  })
  .then(() => {
    liff.getProfile().then(profile => {
                                        const name = profile.displayName
                                        alert(name)
                            })
  })