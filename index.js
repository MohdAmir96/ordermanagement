let numberOfOrders = 0

const manageOrder = () => {
	numberOfOrders++
	let todaysDate = new Date()
	let orderId = `MP${todaysDate.getFullYear()}${todaysDate.getMonth() + 1}${todaysDate.getDate()}0000${numberOfOrders}`

	createOrderCard(orderId)

	manageOrderStatus(orderId)
}

/*
	<div class="col-md-3">
		<div class="card text-center">
			<div class="card-header">
				Order No.: MP202209230005
			</div>
			<div class="card-body">
				<h5 class="card-title">Bill Amount: $52</h5>
				<p class="card-text">Large Pizza - 2 Nos<br>
					Medium Pizza - 3 Nos</p>
				<span class="badge rounded-pill bg-success">Order placed</span>
			</div>
			<div class="card-footer">
				23-09-2022 09:47:36 PM
			</div>
		</div>
	</div>
*/