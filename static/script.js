document.addEventListener('DOMContentLoaded', () => {
    const mainCoin = document.getElementById('main-coin');
    const coinSection = document.getElementById('coin-section');
    const contentSection = document.getElementById('content-section');
    const balanceElement = document.getElementById('balance');
    let balance = 0;
    let taps = 0;
    const maxTaps = 1000;

    mainCoin.addEventListener('click', () => {
        if (taps < maxTaps) {
            taps++;
            balance += 10;
            balanceElement.innerText = balance;
            animateCoin(mainCoin);
        } else {
            alert('You have reached the maximum taps for today.');
        }
    });

    function animateCoin(coin) {
        coin.style.transform = 'scale(0.9)';
        setTimeout(() => {
            coin.style.transform = 'scale(1)';
        }, 150);

        const plusTen = document.createElement('div');
        plusTen.className = 'plus-ten';
        plusTen.innerText = '+10';
        coin.parentElement.appendChild(plusTen);
        setTimeout(() => {
            plusTen.remove();
        }, 2000);
    }

    document.getElementById('ref-btn').addEventListener('click', () => {
        showRefContent();
    });

    document.getElementById('quest-btn').addEventListener('click', () => {
        showQuestContent();
    });

    document.getElementById('tap-btn').addEventListener('click', () => {
        showTapContent();
    });

    function showRefContent() {
        coinSection.style.display = 'none';
        contentSection.style.display = 'flex';
        contentSection.innerHTML = `
            <div class="modal-content">
                <h2>Referral</h2>
                <div class="referral-link">
                    <input type="text" value="https://chimp.game/invite" readonly>
                    <button onclick="copyLink()"><img src="https://i.postimg.cc/FzVJj9WY/Copy-button.png" alt="Copy" style="width: 40px; height: 40px;"></button>
                </div>
            </div>
        `;
    }

    function showQuestContent() {
        coinSection.style.display = 'none';
        contentSection.style.display = 'flex';
        contentSection.innerHTML = `
            <div class="modal-content">
                <div class="quest-item">
                    <p>Join CHIMP Telegram Chat</p>
                    <button onclick="goToLink('https://t.me/chimpchat')"><img src="https://i.postimg.cc/cLNbxTYT/Go-button.png" alt="Go" style="width: 40px; height: 40px;"></button>
                </div>
                <div class="quest-item">
                    <p>Follow CHIMP on X</p>
                    <button onclick="goToLink('https://x.com/chimp')"><img src="https://i.postimg.cc/cLNbxTYT/Go-button.png" alt="Go" style="width: 40px; height: 40px;"></button>
                </div>
                <div class="quest-item">
                    <p>Visit CHIMP Website</p>
                    <button onclick="goToLink('https://chimp.game')"><img src="https://i.postimg.cc/cLNbxTYT/Go-button.png" alt="Go" style="width: 40px; height: 40px;"></button>
                </div>
            </div>
        `;
    }

    function showTapContent() {
        coinSection.style.display = 'flex';
        contentSection.style.display = 'none';
    }
});

function copyLink() {
    const copyText = document.querySelector('.referral-link input');
    copyText.select();
    document.execCommand('copy');
    alert('Link copied to clipboard');
}

function goToLink(url) {
    window.open(url, '_blank');
}
