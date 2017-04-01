const fetch = require('node-fetch')

class RouteHandler {
  constructor (opt) {
    this.server = opt.server
  }

  handle () {
    this.server['get']('/bot', (req, res) => {
      fetch('https://www.teambition.com/api/rooms/58d9c8d410142c6bce58f9d1/activities', {
        method: 'post',
        headers: {
          'Origin': 'https://www.teambition.com',
          'Content-Type': 'application/json',
          'Cookie': 'gr_user_id=10280b3f-e3fa-4a0e-befd-9089bd321240; fs_uid=www.fullstory.com`M776`6226573209370624:5629499534213120; __hstc=69043598.de751e6166e7210b61ff73ba4fdff5b5.1489628066596.1489628066596.1489628066596.1; __hssrc=1; hubspotutk=de751e6166e7210b61ff73ba4fdff5b5; utm=%7B%22source%22:%22baidusem%22,%22campaign%22:%22brand%22,%22medium%22:%22cpc%22,%22term%22:%22teambition%22%7D; region=cn; _cio=2dc46fd0-1143-db8a-9b12-37c68f545092; _cioid=sunjser@gmail.com; mp_wewrLk2ljgh6i7WHs6zv0wtt_mixpanel=%7B%22distinct_id%22%3A%20%2215aeb4263b76b2-038da3f62627a1-1d386853-13c680-15aeb4263b8368%22%2C%22%24os_version%22%3A%20%22Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_0%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdocs.teambition.com%2Fwiki%2Foauth2%22%2C%22%24initial_referring_domain%22%3A%20%22docs.teambition.com%22%7D; TEAMBITION_SESSIONID=eyJhdXRoVXBkYXRlZCI6MTQ3NzU3ODQ0ODg1NSwidHMiOjE0OTA2NjY3ODMzNDksInVpZCI6IjU3Y2NjZjQyZTEyNTE5ZWQ0MjAwZDkwMiIsInVzZXIiOnsiYXZhdGFyVXJsIjoiaHR0cHM6Ly9zdHJpa2VyLnRlYW1iaXRpb24ubmV0L3RodW1ibmFpbC8xMTBrYzNhNzRkMjQ5OWY2ZWYwYzAwMGI5ZjFhZWViNDg5N2Qvdy8xMDAvaC8xMDAiLCJuYW1lIjoic3Vubm9kZSIsImVtYWlsIjoic3VuanNlckBnbWFpbC5jb20iLCJfaWQiOiI1N2NjY2Y0MmUxMjUxOWVkNDIwMGQ5MDIiLCJpc05ldyI6ZmFsc2UsInJlZ2lvbiI6ImNuIn0sInNlY3JldCI6Ilc3KGMzVHVLVFA8VmxoaD40c0xVIn0=; TEAMBITION_SESSIONID.sig=P13Xp4D0iRwgpwqARxYbZww9W7Q; _ga=GA1.2.732279177.1489562038; Hm_lvt_ec912ecc405ccd050e4cdf452ef4e85a=1489738952,1490072685,1490172632,1490172774; Hm_lpvt_ec912ecc405ccd050e4cdf452ef4e85a=1490667122; lang=zh; _gat=1; mp_eSpCz4lYpMYgtuhdH0F6Wgtt_mixpanel=%7B%22distinct_id%22%3A%20%2215ad0d0ead1618-05b055b11620c8-1d386853-13c680-15ad0d0ead2639%22%2C%22displayName%22%3A%20%22rand-jizu0f8yvipxipir7dd6ajor%22%2C%22userKey%22%3A%20%2257cccf42e12519ed4200d902%22%2C%22%24os_version%22%3A%20%22Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_0%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22created_at%22%3A%20%222016-09-05T01%3A49%3A54.308Z%22%2C%22userLanguage%22%3A%20%22zh%22%2C%22env%22%3A%20%22ga%22%2C%22version%22%3A%20%227.27.0-alpha.2%22%2C%22daysSinceRegistered%22%3A%20205%2C%22timezone%22%3A%208%2C%22city%22%3A%20%22Shanghai%22%2C%22country%22%3A%20%22China%22%2C%22region%22%3A%20%22Shanghai%22%2C%22org_subscription%22%3A%20true%2C%22experiments%22%3A%20%5B%0A%20%20%20%20%22all_add%20org%20button.B%22%2C%0A%20%20%20%20%22all_sharelink.B%22%2C%0A%20%20%20%20%22all_web_org_scale.B%22%0A%5D%2C%22admin_of_paid_org%22%3A%20true%7D; mp_tbpanel__c=3'
        },
        body: JSON.stringify({
          'objectType': 'ChatMessage',
          '_boundToObjectId': '58d9c8d410142c6bce58f9d1',
          'boundToObjectType': '',
          '_creatorId': '57cccf42e12519ed4200d902',
          'created': '',
          'updated': '',
          'content': req.query,
          'attachments': [],
          'mentions': {}
        })
      }).then((data) => {return data.json()})
        .then(json => {res.send(json)})
    })

    this.server['post']('/bot', (req, res) => {
      fetch('https://www.teambition.com/api/rooms/58d9c8d410142c6bce58f9d1/activities', {
        method: 'post',
        headers: {
          'Origin': 'https://www.teambition.com',
          'Content-Type': 'application/json',
          'Cookie': 'gr_user_id=10280b3f-e3fa-4a0e-befd-9089bd321240; fs_uid=www.fullstory.com`M776`6226573209370624:5629499534213120; __hstc=69043598.de751e6166e7210b61ff73ba4fdff5b5.1489628066596.1489628066596.1489628066596.1; __hssrc=1; hubspotutk=de751e6166e7210b61ff73ba4fdff5b5; utm=%7B%22source%22:%22baidusem%22,%22campaign%22:%22brand%22,%22medium%22:%22cpc%22,%22term%22:%22teambition%22%7D; region=cn; _cio=2dc46fd0-1143-db8a-9b12-37c68f545092; _cioid=sunjser@gmail.com; mp_wewrLk2ljgh6i7WHs6zv0wtt_mixpanel=%7B%22distinct_id%22%3A%20%2215aeb4263b76b2-038da3f62627a1-1d386853-13c680-15aeb4263b8368%22%2C%22%24os_version%22%3A%20%22Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_0%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdocs.teambition.com%2Fwiki%2Foauth2%22%2C%22%24initial_referring_domain%22%3A%20%22docs.teambition.com%22%7D; TEAMBITION_SESSIONID=eyJhdXRoVXBkYXRlZCI6MTQ3NzU3ODQ0ODg1NSwidHMiOjE0OTA2NjY3ODMzNDksInVpZCI6IjU3Y2NjZjQyZTEyNTE5ZWQ0MjAwZDkwMiIsInVzZXIiOnsiYXZhdGFyVXJsIjoiaHR0cHM6Ly9zdHJpa2VyLnRlYW1iaXRpb24ubmV0L3RodW1ibmFpbC8xMTBrYzNhNzRkMjQ5OWY2ZWYwYzAwMGI5ZjFhZWViNDg5N2Qvdy8xMDAvaC8xMDAiLCJuYW1lIjoic3Vubm9kZSIsImVtYWlsIjoic3VuanNlckBnbWFpbC5jb20iLCJfaWQiOiI1N2NjY2Y0MmUxMjUxOWVkNDIwMGQ5MDIiLCJpc05ldyI6ZmFsc2UsInJlZ2lvbiI6ImNuIn0sInNlY3JldCI6Ilc3KGMzVHVLVFA8VmxoaD40c0xVIn0=; TEAMBITION_SESSIONID.sig=P13Xp4D0iRwgpwqARxYbZww9W7Q; _ga=GA1.2.732279177.1489562038; Hm_lvt_ec912ecc405ccd050e4cdf452ef4e85a=1489738952,1490072685,1490172632,1490172774; Hm_lpvt_ec912ecc405ccd050e4cdf452ef4e85a=1490667122; lang=zh; _gat=1; mp_eSpCz4lYpMYgtuhdH0F6Wgtt_mixpanel=%7B%22distinct_id%22%3A%20%2215ad0d0ead1618-05b055b11620c8-1d386853-13c680-15ad0d0ead2639%22%2C%22displayName%22%3A%20%22rand-jizu0f8yvipxipir7dd6ajor%22%2C%22userKey%22%3A%20%2257cccf42e12519ed4200d902%22%2C%22%24os_version%22%3A%20%22Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_0%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22created_at%22%3A%20%222016-09-05T01%3A49%3A54.308Z%22%2C%22userLanguage%22%3A%20%22zh%22%2C%22env%22%3A%20%22ga%22%2C%22version%22%3A%20%227.27.0-alpha.2%22%2C%22daysSinceRegistered%22%3A%20205%2C%22timezone%22%3A%208%2C%22city%22%3A%20%22Shanghai%22%2C%22country%22%3A%20%22China%22%2C%22region%22%3A%20%22Shanghai%22%2C%22org_subscription%22%3A%20true%2C%22experiments%22%3A%20%5B%0A%20%20%20%20%22all_add%20org%20button.B%22%2C%0A%20%20%20%20%22all_sharelink.B%22%2C%0A%20%20%20%20%22all_web_org_scale.B%22%0A%5D%2C%22admin_of_paid_org%22%3A%20true%7D; mp_tbpanel__c=3'
        },
        body: JSON.stringify({
          'objectType': 'ChatMessage',
          '_boundToObjectId': '58d9c8d410142c6bce58f9d1',
          'boundToObjectType': '',
          '_creatorId': '57cccf42e12519ed4200d902',
          'created': '',
          'updated': '',
          'content': req.body,
          'attachments': [],
          'mentions': {}
        })
      }).then((data) => {return data.json()})
        .then(json => {res.send(json)})
    })

    this.server['del']('/bot', (req, res) => {
      fetch('https://www.teambition.com/api/rooms/58d9c8d410142c6bce58f9d1/activities', {
        method: 'post',
        headers: {
          'Origin': 'https://www.teambition.com',
          'Content-Type': 'application/json',
          'Cookie': 'gr_user_id=10280b3f-e3fa-4a0e-befd-9089bd321240; fs_uid=www.fullstory.com`M776`6226573209370624:5629499534213120; __hstc=69043598.de751e6166e7210b61ff73ba4fdff5b5.1489628066596.1489628066596.1489628066596.1; __hssrc=1; hubspotutk=de751e6166e7210b61ff73ba4fdff5b5; utm=%7B%22source%22:%22baidusem%22,%22campaign%22:%22brand%22,%22medium%22:%22cpc%22,%22term%22:%22teambition%22%7D; region=cn; _cio=2dc46fd0-1143-db8a-9b12-37c68f545092; _cioid=sunjser@gmail.com; mp_wewrLk2ljgh6i7WHs6zv0wtt_mixpanel=%7B%22distinct_id%22%3A%20%2215aeb4263b76b2-038da3f62627a1-1d386853-13c680-15aeb4263b8368%22%2C%22%24os_version%22%3A%20%22Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_0%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdocs.teambition.com%2Fwiki%2Foauth2%22%2C%22%24initial_referring_domain%22%3A%20%22docs.teambition.com%22%7D; TEAMBITION_SESSIONID=eyJhdXRoVXBkYXRlZCI6MTQ3NzU3ODQ0ODg1NSwidHMiOjE0OTA2NjY3ODMzNDksInVpZCI6IjU3Y2NjZjQyZTEyNTE5ZWQ0MjAwZDkwMiIsInVzZXIiOnsiYXZhdGFyVXJsIjoiaHR0cHM6Ly9zdHJpa2VyLnRlYW1iaXRpb24ubmV0L3RodW1ibmFpbC8xMTBrYzNhNzRkMjQ5OWY2ZWYwYzAwMGI5ZjFhZWViNDg5N2Qvdy8xMDAvaC8xMDAiLCJuYW1lIjoic3Vubm9kZSIsImVtYWlsIjoic3VuanNlckBnbWFpbC5jb20iLCJfaWQiOiI1N2NjY2Y0MmUxMjUxOWVkNDIwMGQ5MDIiLCJpc05ldyI6ZmFsc2UsInJlZ2lvbiI6ImNuIn0sInNlY3JldCI6Ilc3KGMzVHVLVFA8VmxoaD40c0xVIn0=; TEAMBITION_SESSIONID.sig=P13Xp4D0iRwgpwqARxYbZww9W7Q; _ga=GA1.2.732279177.1489562038; Hm_lvt_ec912ecc405ccd050e4cdf452ef4e85a=1489738952,1490072685,1490172632,1490172774; Hm_lpvt_ec912ecc405ccd050e4cdf452ef4e85a=1490667122; lang=zh; _gat=1; mp_eSpCz4lYpMYgtuhdH0F6Wgtt_mixpanel=%7B%22distinct_id%22%3A%20%2215ad0d0ead1618-05b055b11620c8-1d386853-13c680-15ad0d0ead2639%22%2C%22displayName%22%3A%20%22rand-jizu0f8yvipxipir7dd6ajor%22%2C%22userKey%22%3A%20%2257cccf42e12519ed4200d902%22%2C%22%24os_version%22%3A%20%22Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_0%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22created_at%22%3A%20%222016-09-05T01%3A49%3A54.308Z%22%2C%22userLanguage%22%3A%20%22zh%22%2C%22env%22%3A%20%22ga%22%2C%22version%22%3A%20%227.27.0-alpha.2%22%2C%22daysSinceRegistered%22%3A%20205%2C%22timezone%22%3A%208%2C%22city%22%3A%20%22Shanghai%22%2C%22country%22%3A%20%22China%22%2C%22region%22%3A%20%22Shanghai%22%2C%22org_subscription%22%3A%20true%2C%22experiments%22%3A%20%5B%0A%20%20%20%20%22all_add%20org%20button.B%22%2C%0A%20%20%20%20%22all_sharelink.B%22%2C%0A%20%20%20%20%22all_web_org_scale.B%22%0A%5D%2C%22admin_of_paid_org%22%3A%20true%7D; mp_tbpanel__c=3'
        },
        body: JSON.stringify({
          'objectType': 'ChatMessage',
          '_boundToObjectId': '58d9c8d410142c6bce58f9d1',
          'boundToObjectType': '',
          '_creatorId': '57cccf42e12519ed4200d902',
          'created': '',
          'updated': '',
          'content': req.body,
          'attachments': [],
          'mentions': {}
        })
      }).then((data) => {return data.json()})
        .then(json => {res.send(json)})
    })
  }
}

module.exports = RouteHandler
