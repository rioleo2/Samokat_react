import './App.css';
import Accordion from './components/accordion';
import { items } from './const/leftMenuCategories';


function App() {
  return (
<body>
    <section class="root-section">
        <aside class="aside-left-menu">
            <div class='left-menu-sticky'>
            <div class="logo">
                <a href="#" >
                    <img src="/images/logo.svg" alt="" width="136px"/>
                </a>
            </div>
            <div class="catalog-tree">
            <Accordion items={items}></Accordion>
            </div>
            </div>
        </aside>
        <main class="main-content">
            <div class="search-header-sticky">
            <div class="search-header">
                <input type="text" class="search-input" placeholder="Искать в Самокате"/>
            </div>
            </div>
            <div class="search-content">
                <div class="promo-categories">
                    <div class="swiper">
                        <div class="promo-categories-card">
                            <span class="card-title">
                                Сладкое к завтраку
                            </span>
                            <img src="/images/breakfast.jpg" alt="" class="card-image"/>
                        </div>
                        <div class="promo-categories-card">
                            <span class="card-title">
                                Что добавить в каши
                            </span>
                            <img src="/images/porridge.jpg" alt="" class="card-image"/>
                        </div>
                        <div class="promo-categories-card">
                            <span class="card-title">
                                Молочные продукты
                            </span>
                            <img src="/images/dairy_desserts.jpeg" alt="" class="card-image"/>
                        </div>
                        <div class="promo-categories-card">
                            <span class="card-title">
                                Взять на прогулку
                            </span>
                            <img src="/images/outgoing-meal.jpg" alt="" class="card-image"/>
                        </div>
                    </div>
                </div>
                <div class="best-price-section">
                    <h2 class="best-price-title">Классные цены</h2>
                    <div class="best-price-cards">
                        <div class="best-price-card">
                            <div class="best-price-card-image"></div>
                            <span class="best-price-card-title">Сыр Самокат голландский, 45%</span>
                            <div class="best-price-card-price">139 Р</div>
                        </div>
                        <div class="best-price-card">
                            <div class="best-price-card-image"></div>
                            <span class="best-price-card-title">Груша Конференция</span>
                            <div class="best-price-card-price">139 Р</div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">

            </footer>
        </main>

        <aside class="aside-right-menu">
            <div class="right-menu-sticky">
            <div class="promo">
                
            </div>
            </div>
        </aside>
    </section>
</body>
  );
}

export default App;
