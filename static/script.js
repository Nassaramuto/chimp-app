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

    function showRefContent() {
        contentSection.innerHTML = `
            <div class="modal-content">
                <div class="referral-link">
                    <input type="text" value="https://chimp.game/invite" readonly>
                    <button onclick="copyToClipboard()">Copy</button>
                </div>
            </div>
        `;
        contentSection.style.display = 'flex';
        coinSection.style.display = 'none';
    }

    function showQuestContent() {
        contentSection.innerHTML = `
            <div class="modal-content">
                <div class="quest-item">
                    <p>Join CHIMP Telegram Chat</p>
                    <button onclick="window.open('https://t.me/joinchat/XXXX', '_blank')">Go</button>
                </div>
                <div class="quest-item">
                    <p>Follow CHIMP on X</p>
                    <button onclick="window.open('https://x.com/chimp', '_blank')">Go</button>
                </div>
                <div class="quest-item">
                    <p>Visit CHIMP Website</p>
                    <button onclick="window.open('https://chimp.game', '_blank')">Go</button>
                </div>
            </div>
        `;
        contentSection.style.display = 'flex';
        coinSection.style.display = 'none';
    }

    document.getElementById('tap-btn').addEventListener('click', () => {
        contentSection.style.display = 'none';
        coinSection.style.display = 'flex';
    });

    function copyToClipboard() {
        const input = document.querySelector('.referral-link input');
        input.select();
        document.execCommand('copy');
        alert('Referral link copied to clipboard!');
    }
});
