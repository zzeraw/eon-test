var pubnub = PUBNUB.init({
  ssl           : true,
  subscribe_key : 'sub-c-efb395aa-b724-49e4-b75e-d735ab795311',
});

var map = eon.map({
  id: 'map',
  mb_token: 'pk.eyJ1IjoienplcmF3IiwiYSI6ImNsazJsZW1nYzBpcHUzZnJ5Y2p6dmFqMWgifQ.k-vuuL38zBYoNwwcngdpxQ',
  mb_id: 'mapbox.satellite',
  channel : "isbilar",
  pubnub: pubnub,
  marker: function (latlng, data) {
	console.log(data);
	console.log(latlng);
  }
});
