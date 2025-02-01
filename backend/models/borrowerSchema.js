import mongoose from 'mongoose';
const loanDataSchema = new mongoose.Schema({
    loan_amnt: Number,
    funded_amnt: Number,
    term: String,
    int_rate: Number,
    installment: Number,
    grade: String,
    sub_grade: String,
    emp_title: String,
    emp_length: String,
    home_ownership: String,
    annual_inc: Number,
    verification_status: String,
    issue_d: String,
    loan_status: String,
    purpose: String,
    zip_code: String,
    addr_state: String,
    dti: Number,
    delinq_2yrs: Number,
    earliest_cr_line: String,
    inq_last_6mths: Number,
    mths_since_last_delinq: Number,
    open_acc: Number,
    pub_rec: Number,
    revol_bal: Number,
    total_acc: Number,
    initial_list_status: String,
    out_prncp: Number,
    total_pymnt: Number,
    total_rec_prncp: Number,
    total_rec_int: Number,
    total_rec_late_fee: Number,
    recoveries: Number,
    collection_recovery_fee: Number,
    last_pymnt_d: String,
    last_pymnt_amnt: Number,
    next_pymnt_d: String,
    application_type: String,
    acc_now_delinq: Number,
    tot_cur_bal: Number,
    total_bal_il: Number,
    total_rev_hi_lim: Number,
    inq_fi: Number,
    inq_last_12m: Number,
    bc_util: Number,
    delinq_amnt: Number,
    mort_acc: Number,
    mths_since_recent_inq: Number,
    num_actv_bc_tl: Number,
    num_actv_rev_tl: Number,
    num_bc_sats: Number,
    num_bc_tl: Number,
    num_sats: Number,
    num_tl_120dpd_2m: Number,
    num_tl_30dpd: Number,
    num_tl_90g_dpd_24m: Number,
    num_tl_op_past_12m: Number,
    pct_tl_nvr_dlq: Number,
    pub_rec_bankruptcies: Number,
    tax_liens: Number,
    tot_hi_cred_lim: Number,
    total_bal_ex_mort: Number,
    total_bc_limit: Number,
    total_il_high_credit_limit: Number,
    hardship_flag: String
}, {
    collection: 'userData',
    strict: false
});
const LoanData = mongoose.model('LoanData', loanDataSchema);

export default LoanData;
