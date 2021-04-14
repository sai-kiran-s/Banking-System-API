(this["webpackJsonpbanking-system-ui"] = this["webpackJsonpbanking-system-ui"] || []).push([[0], { 105: function (e, t, n) { }, 106: function (e, t, n) { }, 134: function (e, t, n) { "use strict"; n.r(t); var c = n(0), a = n.n(c), r = n(12), o = n.n(r), i = (n(105), n(106), n(200)), s = n(183), l = n(187), u = n(184), j = n(182), d = n(53), b = n(177), g = n(180), f = n(87), m = n.n(f), h = n(186), A = n(88), p = n.n(A), O = n(185), E = n(2), x = Object(b.a)((function (e) { return { toolbar: { flexWrap: "wrap" }, toolbarTitle: { flexGrow: 1 }, link: { margin: e.spacing(1, 1.5) }, heroContent: { padding: e.spacing(8, 0, 6) }, cardHeader: { backgroundColor: e.palette.grey[200] }, large: { fontSize: "400%" } } })), R = [{ title: "View Customers", description: [], buttonVariant: "contained" }, { title: "View Transactions", description: [], buttonVariant: "contained" }]; function I() { var e = x(); return Object(c.useEffect)((function () { localStorage.removeItem("locreceiver") }), []), Object(E.jsxs)(a.a.Fragment, { children: [Object(E.jsxs)(g.a, { maxWidth: "sm", component: "main", className: e.heroContent, children: [Object(E.jsx)(d.a, { component: "h1", variant: "h2", align: "center", color: "textPrimary", gutterBottom: !0, children: "Banking System" }), Object(E.jsx)(d.a, { variant: "h5", align: "center", color: "textSecondary", component: "p", children: "This application shows all customers who use the application, transactions made and also helps in making transfers" })] }), Object(E.jsx)(g.a, { style: { display: "block", marginLeft: "auto", marginRight: "auto", width: "80%" }, maxWidth: "md", component: "main", children: Object(E.jsx)(j.a, { container: !0, spacing: 5, alignItems: "flex-end", children: R.map((function (t) { return Object(E.jsx)(j.a, { item: !0, xs: 6, children: Object(E.jsxs)(s.a, { children: [Object(E.jsx)(u.a, { title: t.title, subheader: t.subheader, titleTypographyProps: { align: "center" }, subheaderTypographyProps: { align: "center" }, className: e.cardHeader }), Object(E.jsx)(O.a, { children: Object(E.jsx)(h.a, { children: "View Customers" === t.title ? Object(E.jsx)(m.a, { fontSize: "large" }) : Object(E.jsx)(p.a, { fontSize: "large" }) }) }), Object(E.jsx)(l.a, { children: Object(E.jsx)("a", { style: { width: "100%", textDecoration: "none", color: "white" }, href: "View Customers" === t.title ? "/viewcustomers" : "/viewtransactions", children: Object(E.jsx)(i.a, { fullWidth: !0, variant: t.buttonVariant, color: "secondary", children: "View" }) }) })] }) }, t.title) })) }) })] }) } var v = n(23), B = n(11), y = n(19), N = n(188), T = n(189), w = Object(b.a)((function (e) { return { main: { backgroundColor: "#D5D862", minHeight: "100vh" }, table: { maxWidth: "500" }, root: { flexGrow: 1 }, menuButton: { marginRight: e.spacing(2) }, title: { flexGrow: 1, textAlign: "start" }, heading: { marginTop: e.spacing(2), flexGrow: 1, textAlign: "center", fontFamily: "sans-serif", fontSize: "2em", fontWeight: "500" } } })), S = function () { var e = w(); return Object(E.jsx)("div", { children: Object(E.jsx)("div", { className: e.root, children: Object(E.jsx)(N.a, { position: "static", color: "secondary", children: Object(E.jsxs)(T.a, { children: [Object(E.jsx)(d.a, { variant: "h6", className: e.title, children: Object(E.jsx)(v.b, { to: "/home", style: { textDecoration: "none", color: "white" }, children: "Banking System" }) }), Object(E.jsx)(v.b, { to: "/viewtransactions", style: { textDecoration: "none", color: "white" }, children: Object(E.jsx)(i.a, { color: "inherit", children: "View All Transactions" }) }), Object(E.jsx)(v.b, { to: "/viewcustomers", style: { textDecoration: "none", color: "white" }, children: Object(E.jsx)(i.a, { color: "inherit", children: "View All Customers" }) })] }) }) }) }) }, C = n(5), Q = n(193), H = n(195), L = n(190), D = n(192), P = n(194), F = n(191), k = n(93), U = n(8), z = n(26), W = n.n(z), M = function (e) { return { type: "ALERT_SUCCESS", payload: e } }, G = function (e) { return { type: "ALERT_FAILURE", payload: e } }, Y = { message: "" }, X = function (e) { return function (t) { t({ type: "PROF_REQUEST" }), console.log("prof fetch request"), W.a.get("/api/viewcustomers/showcustomer/".concat(e)).then((function (e) { console.log("prof fetch success", e.data.customer), localStorage.setItem("acc_no", e.data.customer[0].account_number), t({ type: "PROF_SUCCESS", payload: e.data.customer }) })).catch((function (e) { e.response ? (console.log("prof fetch failure"), console.log(e.error), t(G(e.error))) : (console.log("not connected to internet"), t(G("not connected to internet"))) })).finally((function () { console.log("stop loading") })) } }, Z = { isLoading: !1, customer: [], errorMsg: "" }, V = n(18), q = (n(132), Object(b.a)((function (e) { return { main: { backgroundColor: "#D5D862", minHeight: "100vh" }, table: { maxWidth: "500", border: "solid" }, root: { flexGrow: 1 }, menuButton: { marginRight: e.spacing(2) }, title: { flexGrow: 1, textAlign: "start" }, heading: { marginTop: e.spacing(2), flexGrow: 1, textAlign: "center", fontFamily: "sans-serif", fontSize: "2em", fontWeight: "500" } } }))), J = Object(C.a)((function (e) { return { head: { backgroundColor: e.palette.common.black, color: e.palette.common.white }, body: { fontSize: 14 } } }))(L.a), K = Object(C.a)((function (e) { return { root: { "&:nth-of-type(odd)": { backgroundColor: e.palette.action.hover } } } }))(F.a), _ = Object(V.b)((function (e) { return {} }), (function (e) { return { profFetchHandler: function () { e(X()) } } }))((function (e) { console.log(e.columns); var t = q(); return console.log(e.rows.length), Object(E.jsx)("div", { style: { margin: "2%" }, children: 0 === e.rows.length ? Object(E.jsx)(d.a, { children: "Looks like this account is yet to have a transaction!" }) : Object(E.jsx)(D.a, { component: k.a, children: Object(E.jsxs)(Q.a, { stickyHeader: !0, className: t.table, children: [Object(E.jsx)(P.a, { children: Object(E.jsxs)(F.a, { children: [e.columns.map((function (e) { return Object(E.jsx)(J, { align: "left", children: e }) })), (e.label, Object(E.jsx)(J, { align: "left" }))] }) }), Object(E.jsx)(H.a, { children: "viewcustomers" === e.label ? e.rows.map((function (e) { return Object(E.jsxs)(K, { children: [Object(E.jsx)(J, { align: "left", children: e.account_number }), Object(E.jsx)(J, { align: "left", children: e.email_id }), Object(E.jsx)(J, { align: "left", children: e.name }), Object(E.jsx)(J, { align: "left", children: Object(E.jsxs)(v.b, { style: { textDecoration: "none", color: "white" }, to: { pathname: "/profile", state: e.account_number }, children: [" ", Object(E.jsx)(i.a, { color: "primary", children: "View" })] }) })] }, e.name) })) : "viewcustomersexcept" === e.label ? e.rows.map((function (t) { return Object(E.jsxs)(K, { children: [Object(E.jsx)(J, { align: "left", children: t.account_number }), Object(E.jsx)(J, { align: "left", children: t.email_id }), Object(E.jsx)(J, { align: "left", children: t.name }), Object(E.jsx)(J, { align: "left", children: Object(E.jsxs)(v.b, { style: { textDecoration: "none", color: "white" }, to: { pathname: "/transfer", receiver: t.account_number, sender: e.acc_no }, children: [" ", Object(E.jsx)(i.a, { color: "primary", children: "Transfer" })] }) })] }, t.name) })) : e.rows.map((function (e) { return Object(E.jsxs)(K, { children: [Object(E.jsx)(J, { align: "left", children: e.sender_account_number }), Object(E.jsx)(J, { align: "left", children: e.receiver_account_number }), Object(E.jsx)(J, { align: "left", children: new Date(e.datetime).toLocaleString() }), Object(E.jsx)(J, { align: "left", children: e.amount }), Object(E.jsx)(J, { align: "left" })] }, e.name) })) })] }) }) }) })), $ = function (e) { return { type: "CUST_SUCCESS", payload: e } }, ee = { isLoading: !1, customers: [], errorMsg: "" }, te = Object(b.a)((function (e) { return { main: {}, heading: { marginTop: e.spacing(2), flexGrow: 1, textAlign: "center", fontFamily: "sans-serif", fontSize: "2em", fontWeight: "500" } } })), ne = Object(V.b)((function (e) { return { customers: Object(y.a)(e.customer.customers) } }), (function (e) { return { custFetchHandler: function () { e((function (e) { e({ type: "CUST_REQUEST" }), console.log("cust fetch request"), W.a.get("/api/viewcustomers/all").then((function (t) { console.log("cust fetch success", t.data.customers), e($(t.data.customers)) })).catch((function (t) { t.response ? (console.log("cust fetch failure"), console.log(t.error), e(G(t.error))) : (console.log("not connected to internet"), e(G("not connected to internet"))) })).finally((function () { console.log("stop loading") })) })) } } }))((function (e) { Object(c.useEffect)((function () { localStorage.removeItem("locreceiver"), e.custFetchHandler() }), []); var t = Object(y.a)(e.customers), n = te(); return Object(E.jsxs)("div", { className: n.main, children: [Object(E.jsx)(S, {}), Object(E.jsx)(d.a, { variant: "h6", className: n.heading, children: "Customers" }), Object(E.jsx)(_, { columns: ["Account Number", "Email Id", "Name"], rows: t, label: "viewcustomers" })] }) })), ce = n(203), ae = Object(b.a)((function (e) { return { main: {}, heading: { marginTop: e.spacing(2), flexGrow: 1, textAlign: "center", fontFamily: "sans-serif", fontSize: "2em", fontWeight: "500" }, paper: { minHeight: "60vh", display: "flex", flexDirection: "column" }, large: { width: e.spacing(13), height: e.spacing(13) } } })); var re = Object(V.b)((function (e) { return console.log(e.profile), { profile: Object(U.a)({}, e.profile.customer[0]) } }), (function (e) { return { profFetchHandler: function (t) { e(X(t)) } } }))((function (e) { var t = Object(B.f)().state; Object(c.useEffect)((function () { localStorage.removeItem("locreceiver"), console.log("hello"), console.log(t), e.profFetchHandler(t) }), []); var n = ae(); return Object(E.jsxs)("div", { className: n.main, children: [Object(E.jsx)(S, {}), Object(E.jsx)(d.a, { variant: "h6", className: n.heading, children: "Profile" }), Object(E.jsx)("div", { style: { marginTop: "1em", display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }, children: Object(E.jsxs)(k.a, { className: n.paper, variant: "outlined", elevation: 3, children: [Object(E.jsx)("div", { style: { marginTop: "1em", display: "block", marginLeft: "auto", marginRight: "auto" }, children: Object(E.jsx)(ce.a, { src: "data:image/jpeg;base64,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", className: n.large }) }), Object(E.jsxs)("div", { style: { marginTop: "1em", display: "block", marginLeft: "auto", marginRight: "auto" }, children: [Object(E.jsxs)(d.a, { children: ["Name: ", e.profile.name] }), Object(E.jsx)("br", {}), Object(E.jsxs)(d.a, { children: ["Email Address: ", e.profile.email_id] }), Object(E.jsx)("br", {}), Object(E.jsxs)(d.a, { children: ["Account Number: ", e.profile.account_number] }), Object(E.jsx)("br", {}), Object(E.jsxs)(d.a, { children: ["Account Balance: ", e.profile.account_balance] })] }), Object(E.jsx)("div", { style: { marginTop: "4em", display: "block", marginLeft: "auto", marginRight: "auto" }, children: Object(E.jsxs)("div", { style: { display: "flex", flexDirection: "row" }, children: [Object(E.jsx)(v.b, { style: { textDecoration: "none", color: "white" }, to: { pathname: "/viewcustomertransactions", state: e.profile.account_number }, children: Object(E.jsx)(i.a, { color: "primary", children: "View Transactions" }) }), Object(E.jsx)(v.b, { style: { textDecoration: "none", color: "white" }, to: { pathname: "/viewcustomersexcept", state: e.profile.account_number }, children: Object(E.jsx)(i.a, { color: "primary", children: "Transfer Money" }) })] }) })] }) })] }) })), oe = Object(b.a)((function (e) { return { main: {}, heading: { marginTop: e.spacing(2), flexGrow: 1, textAlign: "center", fontFamily: "sans-serif", fontSize: "2em", fontWeight: "500" } } })), ie = Object(V.b)((function (e) { return console.log(e), { customers: Object(y.a)(e.customer.customers), acc_no: e.profile.customer[0] ? e.profile.customer[0].account_number : localStorage.getItem("acc_no") } }), (function (e) { return { custExceptFetchHandler: function (t) { var n; e((n = t, function (e) { e({ type: "CUST_REQUEST" }), console.log("cust fetch request"), W.a.get("/api/viewcustomers/exceptcustomer/".concat(n)).then((function (t) { console.log("cust fetch success", t.data.customers), e($(t.data.customers)) })).catch((function (t) { t.response ? (console.log("cust fetch failure"), console.log(t.error), e(G(t.error))) : (console.log("not connected to internet"), e(G("not connected to internet"))) })).finally((function () { console.log("stop loading") })) })) } } }))((function (e) { var t = Object(B.f)().state; Object(c.useEffect)((function () { console.log(e.acc_no), e.custExceptFetchHandler(t) }), []); var n = Object(y.a)(e.customers), a = oe(); return Object(E.jsxs)("div", { className: a.main, children: [Object(E.jsx)(S, {}), Object(E.jsx)(d.a, { variant: "h6", className: a.heading, children: "Transfer To" }), Object(E.jsx)(_, { columns: ["Account Number", "Email Id", "Name"], rows: n, acc_no: e.acc_no, label: "viewcustomersexcept" })] }) })), se = n(91), le = n(52), ue = n(199), je = { isLoading: !1, message: [], errorMsg: "" }, de = Object(b.a)((function (e) { return { appBar: { position: "relative" }, layout: Object(le.a)({ width: "auto", marginLeft: e.spacing(2), marginRight: e.spacing(2) }, e.breakpoints.up(600 + 2 * e.spacing(2)), { width: 600, marginLeft: "auto", marginRight: "auto" }), paper: Object(le.a)({ marginTop: e.spacing(3), marginBottom: e.spacing(3), padding: e.spacing(2) }, e.breakpoints.up(600 + 2 * e.spacing(3)), { marginTop: e.spacing(6), marginBottom: e.spacing(6), padding: e.spacing(3) }), stepper: { padding: e.spacing(3, 0, 5) }, buttons: { display: "flex", justifyContent: "flex-end" }, button: { marginTop: e.spacing(3), marginLeft: e.spacing(1) } } })); var be = Object(V.b)((function (e) { return { message: Object(U.a)({}, e.transfer.message) } }), (function (e) { return { transferHandler: function (t, n, c) { e(function (e, t, n) { return function (c) { c({ type: "TRANSFER_REQUEST" }), console.log("transfer request"), W.a.post("/api/transfer", { sender_account_number: e, receiver_account_number: t, amount: n }).then((function (e) { console.log("transfer success", e.data.message), c(M(e.data.message)) })).catch((function (e) { e.response ? (console.log("transfer failure"), console.log(e.response.data.message), c(G(e.response.data.message))) : (console.log("not connected to internet"), c(G("not connected to internet"))) })).finally((function () { console.log("stop loading") })) } }(t, n, c)) }, alertFailure: function (t) { e(G(t)) } } }))((function (e) { var t, n, r = Object(B.f)(); r.receiver && r.sender || localStorage.getItem("locreceiver") && localStorage.getItem("locsender") ? (r.receiver && r.sender && (localStorage.setItem("locreceiver", r.receiver), localStorage.setItem("locsender", r.sender)), t = localStorage.getItem("locreceiver"), n = localStorage.getItem("locsender")) : (e.alertFailure("Please select a receiver before transferring!"), window.location.replace("/viewcustomers")); var o = de(), s = Object(c.useState)(0), l = Object(se.a)(s, 2), u = l[0], b = l[1]; return console.log(r.receiver), console.log(r), Object(E.jsxs)(a.a.Fragment, { children: [Object(E.jsx)(S, {}), Object(E.jsx)("main", { className: o.layout, children: Object(E.jsxs)(k.a, { className: o.paper, children: [Object(E.jsx)(d.a, { variant: "h6", gutterBottom: !0, children: "Transfer Money" }), Object(E.jsxs)(j.a, { container: !0, spacing: 3, style: { marginTop: "2em" }, children: [Object(E.jsx)(j.a, { item: !0, xs: 12, children: Object(E.jsx)(ue.a, { id: "sender_account_no", name: "sender_account_no", label: "Sender Account Number", fullWidth: !0, value: n, disabled: !0 }) }), Object(E.jsx)(j.a, { item: !0, xs: 12, children: Object(E.jsx)(ue.a, { id: "receiver_account_no", name: "receiver_account_no", label: "Receiver Account Number", fullWidth: !0, value: t, disabled: !0 }) }), Object(E.jsx)(j.a, { item: !0, xs: 12, sm: 6, children: Object(E.jsx)(ue.a, { required: !0, id: "amount", name: "amount", label: "Amount (in Rs.)", type: "number", value: u, onChange: function (e) { return b(e.target.value) }, fullWidth: !0 }) }), Object(E.jsx)(j.a, { item: !0, xs: 12, style: { marginTop: "1em" }, children: Object(E.jsx)(i.a, { onClick: function () { parseInt(u) <= 0 ? e.alertFailure("Amount cannot be zero or negative!") : function (t, n, c) { e.transferHandler(t, n, c) }(n, t, parseInt(u)) }, children: "Transfer" }) })] })] }) })] }) })), ge = function (e) { return { type: "TRANS_SUCCESS", payload: e } }, fe = { isLoading: !1, transactions: [], errorMsg: "" }, me = Object(b.a)((function (e) { return { main: {}, heading: { marginTop: e.spacing(2), flexGrow: 1, textAlign: "center", fontFamily: "sans-serif", fontSize: "2em", fontWeight: "500" } } })); var he = Object(V.b)((function (e) { return { transactions: Object(y.a)(e.transaction.transactions) } }), (function (e) { return { custTransFetchHandler: function (t) { var n; e((n = t, function (e) { e({ type: "TRANS_REQUEST" }), console.log("trans fetch request"), W.a.get("/api/viewtransactions/".concat(n)).then((function (t) { console.log("trans fetch success", t.data.transactions), e(ge(t.data.transactions)) })).catch((function (t) { t ? (console.log("trans fetch failure"), console.log(t.response), e(G(t.error))) : (console.log("not connected to internet"), e(G("not connected to internet"))) })).finally((function () { console.log("stop loading") })) })) } } }))((function (e) { var t = Object(B.f)().state; Object(c.useEffect)((function () { localStorage.removeItem("locreceiver"), e.custTransFetchHandler(t) }), []); var n = me(), a = Object(y.a)(e.transactions); return Object(E.jsxs)("div", { className: n.main, children: [Object(E.jsx)(S, {}), Object(E.jsxs)(d.a, { variant: "h6", className: n.heading, children: ["Past Transactions of ", t] }), Object(E.jsx)(_, { columns: ["Sender Account No.", "Receiver Account No.", "Date", "Amount"], rows: a })] }) })), Ae = Object(b.a)((function (e) { return { main: {}, heading: { marginTop: e.spacing(2), flexGrow: 1, textAlign: "center", fontFamily: "sans-serif", fontSize: "2em", fontWeight: "500" } } })); var pe = Object(V.b)((function (e) { return { transactions: Object(y.a)(e.transaction.transactions) } }), (function (e) { return { transFetchHandler: function () { e((function (e) { e({ type: "TRANS_REQUEST" }), console.log("trans fetch request"), W.a.get("/api/viewtransactions/all").then((function (t) { console.log("trans fetch success", t.data.transactions), e(ge(t.data.transactions)) })).catch((function (t) { t.response ? (console.log("trans fetch failure"), console.log(t.error), e(G(t.error))) : (console.log("not connected to internet"), e(G("not connected to internet"))) })).finally((function () { console.log("stop loading") })) })) } } }))((function (e) { Object(c.useEffect)((function () { localStorage.removeItem("locreceiver"), e.transFetchHandler() }), []); var t = Ae(), n = Object(y.a)(e.transactions); return Object(E.jsxs)("div", { className: t.main, children: [Object(E.jsx)(S, {}), Object(E.jsx)(d.a, { variant: "h6", className: t.heading, children: "Past Transactions" }), Object(E.jsx)(_, { columns: ["Sender Account No.", "Receiver Account No.", "Date", "Amount"], rows: n })] }) })), Oe = n(202), Ee = n(196), xe = n(197), Re = n(198); var Ie = Object(V.b)((function (e) { return { message: e.alert.message } }), (function (e) { return { alertFailure: function (t) { e(G(t)) }, alertSuccess: function (t) { e(M(t)) }, ClearAlert: function () { e({ type: "CLEAR_ALERT_FAILURE" }) } } }))((function (e) { return Object(E.jsxs)("div", { className: "App", children: ["" !== e.message ? Object(E.jsxs)(Oe.a, { open: !0, onClose: function () { return e.ClearAlert() }, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", children: [Object(E.jsx)(Ee.a, { children: Object(E.jsx)(xe.a, { id: "alert-dialog-description", children: e.message }) }), Object(E.jsx)(Re.a, { children: Object(E.jsx)(i.a, { onClick: function () { return e.ClearAlert() }, color: "primary", children: "OK" }) })] }) : null, Object(E.jsx)(v.a, { children: Object(E.jsxs)(B.c, { children: [Object(E.jsx)(B.a, { path: "/home", children: Object(E.jsx)(I, {}) }), Object(E.jsx)(B.a, { path: "/viewtransactions", children: Object(E.jsx)(pe, {}) }), Object(E.jsx)(B.a, { path: "/viewcustomers", children: Object(E.jsx)(ne, {}) }), Object(E.jsx)(B.a, { path: "/profile", children: Object(E.jsx)(re, {}) }), Object(E.jsx)(B.a, { path: "/viewcustomersexcept", children: Object(E.jsx)(ie, {}) }), Object(E.jsx)(B.a, { path: "/viewcustomertransactions", children: Object(E.jsx)(he, {}) }), Object(E.jsx)(B.a, { path: "/transfer", children: Object(E.jsx)(be, {}) }), Object(E.jsx)(B.a, { path: "/", children: Object(E.jsx)(I, {}) })] }) })] }) })), ve = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 205)).then((function (t) { var n = t.getCLS, c = t.getFID, a = t.getFCP, r = t.getLCP, o = t.getTTFB; n(e), c(e), a(e), r(e), o(e) })) }, Be = n(40), ye = Object(Be.c)({ customer: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(U.a)({}, ee), t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case "CUST_REQUEST": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !0 }); case "CUST_SUCCESS": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !1, customers: Object(y.a)(t.payload) }); case "CUST_FAILURE": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !1, errorMsg: t.payload }); default: return e } }, transaction: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(U.a)({}, fe), t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case "TRANS_REQUEST": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !0 }); case "TRANS_SUCCESS": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !1, transactions: Object(y.a)(t.payload) }); case "TRANS_FAILURE": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !1, errorMsg: t.payload }); default: return e } }, profile: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(U.a)({}, Z), t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case "PROF_REQUEST": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !0 }); case "PROF_SUCCESS": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !1, customer: Object(y.a)(t.payload) }); case "PROF_FAILURE": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !1, errorMsg: t.payload }); default: return e } }, transfer: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(U.a)({}, je), t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case "TRANSFER_REQUEST": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !0 }); case "TRANSFER_SUCCESS": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !1, message: t.payload }); case "TRANSFER_FAILURE": return Object(U.a)(Object(U.a)({}, e), {}, { isLoading: !1, errorMsg: t.payload }); default: return e } }, alert: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(U.a)({}, Y), t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case "ALERT_SUCCESS": case "ALERT_FAILURE": return { message: t.payload }; case "CLEAR_ALERT_FAILURE": return { message: "" }; default: return e } } }), Ne = n(90), Te = Object(Be.d)(ye, Object(Be.a)(Ne.a)); o.a.render(Object(E.jsx)(V.a, { store: Te, children: Object(E.jsx)(Ie, {}) }), document.getElementById("root")), ve() } }, [[134, 1, 2]]]);
//# sourceMappingURL=main.380ed8b2.chunk.js.map