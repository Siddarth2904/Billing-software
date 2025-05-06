import './CustomerForm.css';

const CustomerForm = ({ customerName, mobileNumber, setMobileNumber, setCustomerName }) => {
    return (
        <div className="p-1">
            <div className="mb-1">
                <div className="d-flex align-items-center gap-2">
                    {/* <label htmlFor="customerName" className="col-4">Customer name</label> */}
                    <input type="text" className="form-control form-control-sm" id="customerName" onChange={(e) => setCustomerName(e.target.value)} value={customerName} required placeholder='Customer name' />
                </div>
            </div>
            <div className="mb-1">
                <div className="d-flex align-items-center gap-2">
                    {/* <label htmlFor="mobileNumber" className="col-4">Mobile number</label> */}
                    <input type="text" className="form-control form-control-sm" id="mobileNumber" onChange={(e) => setMobileNumber(e.target.value)} value={mobileNumber} required placeholder='Mobile number' />
                </div>
            </div>
        </div>
    )
}

export default CustomerForm;