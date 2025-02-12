const stripe = Stripe('pk_test_51QayQnPK2Dhv1T3wLi8CHGDQ9BxV6paqTU7kYBsrTAqfU42NAuMlSMWW1oNC2IlnDJ0zYxbvmZKhmiOvge0Vk5x0003f0DcBJb');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });