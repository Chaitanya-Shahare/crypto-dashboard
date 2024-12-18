let data = [];

function fetchData() {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      data = res;
      renderList();
    });
}

function renderList() {
  let container = document.getElementById("container");

  data.forEach((crypto) => {
    container.innerHTML += `
      <div class="card">
        <div class="card__img-wrapper">
          <img
            src=${crypto.image}
            alt="Coin"
          />
        </div>
        <div class="card__details">
          <div class="card__row">
            <div class="card__name">${crypto.name}</div>
            <div class="card__price">${crypto.current_price}</div>
          </div>

          <div class="card__row">
            <div class="card__short-name">${crypto.symbol.toUpperCase()}</div>
            <div class="card__change">${crypto.ath_change_percentage}%</div>
          </div>
        </div>
      </div>
            `;
  });
}

fetchData();
