totalQty = 0;
totalPrice = 0;
totalCicks = 0;
evenOddCounter = 0;
index = 0;
fnCallCount = 0;
divIdArr = [];

function addItemToCart(mainDivId, mobileModel, mobileColor, mobilePrice, mobileQty) {
    var sameIsSelected = false;
    divIdArr[index] = mainDivId;
    index++;
    count = 0;

    var mobQty = document.getElementById(mobileQty);

    var mobQtyVal = mobQty.value.trim();
    mobQtyVal = mobQtyVal * 1;

    if (fnCallCount > 0) {
        for (var i = 0; i < divIdArr.length - 1; i++) {
            if (divIdArr[i] == mainDivId) {
                sameIsSelected = true;
                count = count + 1;
                alert("You have already added this item to the cart. Please go to cart and change the quantity.");
                document.getElementById(mobileQty).value = "";
                break;
            }
        }
    }

    if (sameIsSelected == true || (mobQtyVal == "") || !(mobQtyVal >= 1 && mobQtyVal <= 99)) {
        if (count == 0) {
            alert("Please enter a value in the text box between 1 and 99 only.");
            mobQty.focus();
        }
    } else if (sameIsSelected == false && (mobQtyVal != "" && (mobQtyVal >= 1 && mobQtyVal <= 99))) {
//            Setting the values into an object START.

        if (mainDivId == "mBlackDiv") {
            mBlackDivObj = {divId: mainDivId, model: mobileModel, color: mobileColor, price: mobilePrice, qty: mobQtyVal};
            sessionStorage.setItem("mBlackDivObj", JSON.stringify(mBlackDivObj));
        }
        else if (mainDivId == "cBlackDiv") {
            cBlackDivObj = {divId: mainDivId, model: mobileModel, color: mobileColor, price: mobilePrice, qty: mobQtyVal};
            sessionStorage.setItem("cBlackDivObj", JSON.stringify(cBlackDivObj));
        }
        else if (mainDivId == "eBlackDiv") {
            eBlackDivObj = {divId: mainDivId, model: mobileModel, color: mobileColor, price: mobilePrice, qty: mobQtyVal};
            sessionStorage.setItem("eBlackDivObj", JSON.stringify(eBlackDivObj));
        }
        else if (mainDivId == "eWhiteDiv") {
            eWhiteDivObj = {divId: mainDivId, model: mobileModel, color: mobileColor, price: mobilePrice, qty: mobQtyVal};
            sessionStorage.setItem("eWhiteDivObj", JSON.stringify(eWhiteDivObj));
        }
        else if (mainDivId == "spBlackDiv") {
            spBlackDivObj = {divId: mainDivId, model: mobileModel, color: mobileColor, price: mobilePrice, qty: mobQtyVal};
            sessionStorage.setItem("spBlackDivObj", JSON.stringify(spBlackDivObj));
        }
        else if (mainDivId == "lBlackDiv") {
            lBlackDivObj = {divId: mainDivId, model: mobileModel, color: mobileColor, price: mobilePrice, qty: mobQtyVal};
            sessionStorage.setItem("lBlackDivObj", JSON.stringify(lBlackDivObj));
        }
        else if (mainDivId == "t2BlackDiv") {
            t2BlackDivObj = {divId: mainDivId, model: mobileModel, color: mobileColor, price: mobilePrice, qty: mobQtyVal};
            sessionStorage.setItem("t2BlackDivObj", JSON.stringify(t2BlackDivObj));
        }

//            Setting the values into an object END.


        var imgId = mainDivId.slice(0, mainDivId.length - 3);

        sessionStorage.setItem('totalQtyStorage', totalQty);
        sessionStorage.setItem('totalPriceStorage', totalPrice);

        var mobModel = mobileModel;
        var mobColor = mobileColor;
        var mobPrice = mobilePrice;

        totalCostSpan = document.getElementById("totalCost");
        noOfItemsSpan = document.getElementById("noOfItems");


        mobPrice = mobPrice * mobQtyVal;

        if (mobQtyVal == "" || !(mobQtyVal >= 1 && mobQtyVal <= 99)) {
            alert("Please enter a value in the text box between 1 and 99 only.");
            mobQty.focus();
        }
        else if (mobQtyVal >= 1 && mobQtyVal <= 99) {

            totalQty = sessionStorage.getItem('totalQtyStorage');
            totalPrice = sessionStorage.getItem('totalPriceStorage');

            totalQty = totalQty * 1;
            totalPrice = totalPrice * 1;

            totalQty = totalQty + mobQtyVal;
            totalPrice = totalPrice + mobPrice;

            noOfItemsSpan.innerHTML = totalQty;
            totalCostSpan.innerHTML = totalPrice;

            sessionStorage.setItem('totalQtyStorage', totalQty);
            sessionStorage.setItem('totalPriceStorage', totalPrice);
//            sessionStorage.setItem('currentQtyStorage', mobQtyVal);

        }


        //        Adding items to cart START

        var cartDiv = document.getElementById("cartItemsPart");

        sessionStorage.setItem('evenOddCounterStorage', evenOddCounter);
        evenOddCounter = sessionStorage.getItem('evenOddCounterStorage');
        evenOddCounter = evenOddCounter * 1;

        if (evenOddCounter % 2 != 0) {
            evenOddVal = "Odd";
        }
        else {
            evenOddVal = "Even";
        }

        evenOddCounter = evenOddCounter + 1;

        sessionStorage.setItem('evenOddCounterStorage', evenOddCounter);

        var ImgIdSrc = document.getElementById(imgId).firstChild.src;

//            var mainDivIdString = mainDivId;
        changedId = mainDivId + "InCart";
//        mobileQty = mobileQty + "2";

//        mobQtyVal = sessionStorage.getItem("currentQtyStorage");

        cartDiv.innerHTML = cartDiv.innerHTML + "<div class='productsInCart products" + evenOddVal + " produtsInCart' id=" + changedId + ">  " +
            "<span class='mobileImg'><a href='javascript:void(0)' onclick='getImgSpecPopup(this);' id='" + imgId + "'><img src='" + ImgIdSrc + "' width='50px' height='100px' alt='Sony Xperia T2'/></a></span>  " +
            "<span class='mobileName'>" + mobileModel + "</span>  " +
            "<span class='mobileColor'>" + mobileColor + "</span>  " +
            "<span class='mobilePrice'>Rs. " + mobilePrice + "</span>  " +
//            "<span class='mobileQuantity'><input type='text' id='" + mobileQty + "2' value='" + mobQtyVal + "' readonly></span>  " +
            "<span class='mobileQuantity'><input type='text' id='" + mobileQty + "2' value='" + mobQtyVal + "' ></span>  " +
            "<span class='updateQty'><a href='javascript:void(0)' onclick='updateItemQtyInCart(" + mainDivId + "," + mobileQty + "2," + mobQtyVal + "," + mobilePrice + ");'><button>Update Quantity</button></a></span>  " +
            "<span class='deleteFromCart'><a href='javascript:void(0)' onclick='deleteItemFromCart(" + changedId + "," + mobQtyVal + "," + mobilePrice + ");'><button>Delete</button></a></span>  </div>";
        //        Adding items to cart END

        fnCallCount = fnCallCount + 1;

        mobQty.value = "";
    }
}


function updateItemQtyInCart(mainDivId, mobileQty, mobQtyVal, mobilePrice) {

    if (mainDivId.id == "mBlackDiv") {
        mBlackDivObj.qty = mobileQty.value; //holds the previous value.
        sessionStorage.setItem("mBlackDivObj", JSON.stringify(mBlackDivObj));
    }
    else if (mainDivId.id == "cBlackDiv") {
        cBlackDivObj.qty = mobileQty.value;
        sessionStorage.setItem("cBlackDivObj", JSON.stringify(cBlackDivObj));
    }
    else if (mainDivId.id == "eBlackDiv") {
        eBlackDivObj.qty = mobileQty.value;
        sessionStorage.setItem("eBlackDivObj", JSON.stringify(eBlackDivObj));
    }
    else if (mainDivId.id == "eWhiteDiv") {
        eWhiteDivObj.qty = mobileQty.value;
        sessionStorage.setItem("eWhiteDivObj", JSON.stringify(eWhiteDivObj));
    }
    else if (mainDivId.id == "spBlackDiv") {
        spBlackDivObj.qty = mobileQty.value;
        sessionStorage.setItem("spBlackDivObj", JSON.stringify(spBlackDivObj));
    }
    else if (mainDivId.id == "lBlackDiv") {
        lBlackDivObj.qty = mobileQty.value;
        sessionStorage.setItem("lBlackDivObj", JSON.stringify(lBlackDivObj));
    }
    else if (mainDivId.id == "t2BlackDiv") {
        t2BlackDivObj.qty = mobileQty.value;
        sessionStorage.setItem("t2BlackDivObj", JSON.stringify(t2BlackDivObj));
    }


//    sessionStorage.setItem('currentQtyStorage', mobileQty.value);

//'mobilePrice' Stores the unitPrice of the current item

    if (mobileQty.value > 0 && mobileQty.value < 99) {

//        alert("C val::"+mobileQty.value)        //Stores the current value of the text box

        var mainDivIdObj = mainDivId.id + "Obj";
        var currentItemObj = JSON.parse(sessionStorage.getItem(mainDivIdObj));

        var currentItemPrice = currentItemObj['price'];             //Stores the Item Price of the item
        var currentItemQty = mobQtyVal;     //Stores the previous value(Qty) of the text box

//        alert("P val::"+currentItemQty)
        totalQty = sessionStorage.getItem('totalQtyStorage');        //Stores the total quantity of the cart
        totalPrice = sessionStorage.getItem('totalPriceStorage');    //Stores the total price of the cart

        totalQty = totalQty * 1;
        totalPrice = totalPrice * 1;

        var actualQty = 0;

        if (currentItemQty < mobileQty.value) {
            console.log("present quantity is greater than previous quantity");
            actualQty = mobileQty.value - currentItemQty;

            mobPrice = currentItemPrice * actualQty;
            totalQty = totalQty + actualQty;
//            alert(totalQty)
            totalPrice = totalPrice + mobPrice;

        } else if (currentItemQty > mobileQty.value) {
            console.log("present quantity is less than previous quantity");
            actualQty = currentItemQty - mobileQty.value;

            mobPrice = currentItemPrice * actualQty;
            totalQty = totalQty - actualQty;
            totalPrice = totalPrice - mobPrice;

        } else if (currentItemQty == mobileQty.value) {
            console.log("present quantity and previous quantity are equal");
            alert("present quantity and previous quantity are equal. So no modification will be performed.");
        }

        noOfItemsSpan.innerHTML = totalQty;
        totalCostSpan.innerHTML = totalPrice;

        sessionStorage.setItem('totalQtyStorage', totalQty);
        sessionStorage.setItem('totalPriceStorage', totalPrice);

    } else {
        alert("Please enter a value between 1 and 99 only.");
        mobileQty.focus();
    }

//    sessionStorage.setItem('currentQtyStorage', mobileQty.value);

}

function deleteItemFromCart(mainDivId, mobQtyVal, mobilePrice) {

    mainDivId.id = (mainDivId.id).substring(0, mainDivId.id.length - 6);
    if (mainDivId.id == "mBlackDiv") {
        mobQtyVal = JSON.parse(sessionStorage.getItem("mBlackDivObj")).qty;
    }
    else if (mainDivId.id == "cBlackDiv") {
        mobQtyVal = JSON.parse(sessionStorage.getItem("cBlackDivObj")).qty;
    }
    else if (mainDivId.id == "eBlackDiv") {
        mobQtyVal = JSON.parse(sessionStorage.getItem("eBlackDivObj")).qty;
    }
    else if (mainDivId.id == "eWhiteDiv") {
        mobQtyVal = JSON.parse(sessionStorage.getItem("eWhiteDivObj")).qty;
    }
    else if (mainDivId.id == "spBlackDiv") {
        mobQtyVal = JSON.parse(sessionStorage.getItem("spBlackDivObj")).qty;
    }
    else if (mainDivId.id == "lBlackDiv") {
        mobQtyVal = JSON.parse(sessionStorage.getItem("lBlackDivObj")).qty;
    }
    else if (mainDivId.id == "t2BlackDiv") {
        mobQtyVal = JSON.parse(sessionStorage.getItem("t2BlackDivObj")).qty;
    }

//    mobQtyVal = sessionStorage.getItem('currentQtyStorage');

    totalQty = sessionStorage.getItem('totalQtyStorage');
    totalPrice = sessionStorage.getItem('totalPriceStorage');

    totalQty = totalQty * 1;
    totalPrice = totalPrice * 1;

    mobPrice = mobilePrice * mobQtyVal;
    totalQty = totalQty - mobQtyVal;

    totalPrice = totalPrice - mobPrice;

    noOfItemsSpan.innerHTML = totalQty;
    totalCostSpan.innerHTML = totalPrice;

    sessionStorage.setItem('totalQtyStorage', totalQty);
    sessionStorage.setItem('totalPriceStorage', totalPrice);

    mainDivId.outerHTML = "";

}


viewCartCalls = 0;

function viewCart() {
    viewCartCalls = viewCartCalls + 1;

    var productsDivId = document.getElementById("productsDivId");
    var cartItemsPart = document.getElementById("cartItemsPart");
    var viewCartBtnText = document.getElementById("viewCartBtnText");

    productsDivId.style.display = (productsDivId.style.display == "none") ? "block" : "none";
    cartItemsPart.style.display = (cartItemsPart.style.display == "block") ? "none" : "block";

    if (viewCartCalls % 2 != 0) {
        viewCartBtnText.innerHTML = "View Items";
    }
    else {
        viewCartBtnText.innerHTML = "View Cart";
    }
}


function getImgSpecPopup(dumId) {

    var shuffleVisibility = document.getElementById("prodSpecHidden");
    var mobileImgSrc = document.getElementById("popupMobileImg");
//        var divInProdSpecHidden = document.getElementById("divInProdSpecHidden");

//    alert(dumId.id)
    if (dumId.id == "mBlack") {
        mobileImgSrc.src = "assets/images/sony-xperia-m-400x400-Black.jpeg";
//        divInProdSpecHidden.style.margin = "100px auto";
//        alert(dumId.id)
    }
    else if (dumId.id == "cBlack") {
        mobileImgSrc.src = "assets/images/sony-xperia-c-400x400-Black.jpeg";
    }
    else if (dumId.id == "eBlack") {
        mobileImgSrc.src = "assets/images/sony-xperia-e-400x400-Black.jpeg";
    }
    else if (dumId.id == "eWhite") {
        mobileImgSrc.src = "assets/images/sony-xperia-e-400x400-White.jpeg";
    }
    else if (dumId.id == "spBlack") {
        mobileImgSrc.src = "assets/images/sony-xperia-sp-400x400-Black.jpeg";
    }
    else if (dumId.id == "lBlack") {
        mobileImgSrc.src = "assets/images/sony-xperia-l-400x400-Black.jpeg";
    }
    else if (dumId.id == "t2Black") {
        mobileImgSrc.src = "assets/images/sony-xperia-t2-ultra-400x400-Black.jpeg";
    }

    shuffleVisibility.style.visibility = (shuffleVisibility.style.visibility == "visible") ? "hidden" : "visible";
}