
// document.getElementById('first-plus-button').addEventListener('click', function () {

// })

// document.getElementById('first-minus-button').addEventListener('click', function () {

// })
function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    // const ticketTotal = ticketNewCount * 150;
    let ticketTotal = 0;
    if (ticket == 'first') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'eco') {
        ticketTotal = ticketNewCount * 100;
    }
    calculateSubTotal();
    // document.getElementById('sub-total').innerText = '$' + ticketTotal;
}
function calculateSubTotal() {
    const firstInput = document.getElementById('first-input');
    const firstCount = parseInt(firstInput.value);

    const ecoInput = document.getElementById('eco-input');
    const ecoCount = parseInt(ecoInput.value);

    const subTotal = firstCount * 150 + ecoCount * 100;
    document.getElementById('sub-total').innerText = '$' + subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

// --------------- SINGLE FUNCTIONS ---------------

// document.getElementById('first-plus-button').addEventListener('click', function () {
//     const firstClassInput = document.getElementById('first-input');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('sub-total').innerText = '$' + firstClassTotal;
// })

// document.getElementById('first-minus-button').addEventListener('click', function () {
//     const firstClassInput = document.getElementById('first-input');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('sub-total').innerText = '$' + firstClassTotal;
// })

// document.getElementById('eco-plus-button').addEventListener('click', function () {

//     // const ecoClassInput = document.getElementById('eco-input');
//     // const ecoClassCount = parseInt(ecoClassInput.value);
//     // const ecoClassNewCount = ecoClassCount + 1;
//     // ecoClassInput.value = ecoClassNewCount;
//     // const ecoClassTotal = ecoClassNewCount * 100;
//     // document.getElementById('sub-total').innerText = '$' + ecoClassTotal;
// })

// document.getElementById('eco-minus-button').addEventListener('click', function () {

//     // const ecoClassInput = document.getElementById('eco-input');
//     // const ecoClassCount = parseInt(ecoClassInput.value);
//     // const ecoClassNewCount = ecoClassCount - 1;
//     // ecoClassInput.value = ecoClassNewCount;
//     // const ecoClassTotal = ecoClassNewCount * 100;
//     // document.getElementById('sub-total').innerText = '$' + ecoClassTotal;
// })

// --------------- COMMON FUNCTIONS ---------------

// function handleFirstChange(isIncrease) {
//     const firstClassInput = document.getElementById('first-input');
//     const firstClassCount = parseInt(firstClassInput.value);
//     let firstClassNewCount = firstClassCount;
//     if (isIncrease == true) {
//         firstClassNewCount = firstClassCount + 1;
//     }
//     if (isIncrease == false && firstClassCount > 0) {
//         firstClassNewCount = firstClassCount - 1;
//     }
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('sub-total').innerText = '$' + firstClassTotal;
// }

// function handleEcoChange(isIncrease) {
//     const ecoClassInput = document.getElementById('eco-input');
//     const ecoClassCount = parseInt(ecoClassInput.value);
//     let ecoClassNewCount = ecoClassCount;
//     if (isIncrease == true) {
//         ecoClassNewCount = ecoClassCount + 1;
//     }
//     if (isIncrease == false && ecoClassCount > 0) {
//         ecoClassNewCount = ecoClassCount - 1;
//     }
//     ecoClassInput.value = ecoClassNewCount;
//     const ecoClassTotal = ecoClassNewCount * 100;
//     document.getElementById('sub-total').innerText = '$' + ecoClassTotal;
// }




// < !--Start of LiveChat(www.livechatinc.com) code-- >

window.__lc = window.__lc || {};
window.__lc.license = 12800607;
; (function (n, t, c) { function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n) } var e = { _q: [], _h: null, _v: "2.0", on: function () { i(["on", c.call(arguments)]) }, once: function () { i(["once", c.call(arguments)]) }, off: function () { i(["off", c.call(arguments)]) }, get: function () { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) }, call: function () { i(["call", c.call(arguments)]) }, init: function () { var n = t.createElement("script"); n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n) } }; !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e }(window, document, [].slice))
