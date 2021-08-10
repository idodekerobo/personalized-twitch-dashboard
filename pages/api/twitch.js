// This is where all the logic for your Twitch API will live!
// going to _url_/api/twitch will return this function. that's what the default keyword does
export default async (req, res) => {
  res.status(200).json({data: 'Welcome to Twitch API!'})
}