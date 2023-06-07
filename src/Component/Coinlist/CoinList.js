import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoinList.css';
import OnlyNavbar from '../../Common/Header/Navbar';
import Footer from '../../Common/Footer/Footer';
import { Link } from 'react-router-dom';

const CryptoList = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setCoins(response.data);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCoins.length / coinsPerPage); i++) {
    pageNumbers.push(i);
  }
  var inr= 81.79;

  return (
    <div >
      <OnlyNavbar/>
      <div className="crypto-container">
      
      {/* <h1>Crypto Coins List</h1> */}
      <input type="text" className='crypto-search' placeholder="Search for a coin" onChange={handleSearch} />
      <table className="coins-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {currentCoins.map((coin) => (
            <tr key={coin.id}>
              <td className="coin-logo"><Link to={`/coins/${coin.id}`}><img src={coin.image} alt={coin.name} /></Link></td>
              <td>{coin.name} ({coin.symbol})</td>
              <td>₹{(coin.current_price * inr).toFixed(2)}</td>
              <td className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
            {number}
          </button>
        ))}
      </div>
      </div>
      <hr style={{color:'beige'}}/>
      <Footer/>
    </div>
  );
};

export default CryptoList;