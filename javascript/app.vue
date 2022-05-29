data: () => ({
    games: [],
}),

async getGames() {
    const url = SERVER_URL + "/games";
    const r = await fetch(url);
    const games = await r.json();
    this.games = games;
},