const HOST = "http://127.0.0.1:8000/api";

exports.requests = {
  fetchAllEvents: `${HOST}/events/all`,
  fetchTechEvents: `${HOST}/events/tech`,
  fetchCultEvents: `${HOST}/events/cult`,
};
