export const expensesCategory = {
	'': { name: 'Select', emoji: ' ' },
	education: { name: 'Education', emoji: '📚' },
	entertainment: { name: 'Entertainment', emoji: '🍿' },
	bills: { name: 'Bills', emoji: '🧾' },
	food: { name: 'Food', emoji: '🍔' },
	drink: { name: 'Drink', emoji: '🥤' },
	grocery: { name: 'Grocery', emoji: '🛒' },
	order: { name: 'Online Order', emoji: '📦' },
	other: { name: 'Others', emoji: '🤷🏻‍♂️' },
	emi: { name: 'EMI', emoji: '🤑' },
	sports: { name: 'Sports', emoji: '⚽️' },
	savings: { name: 'Savings', emoji: '💰' },
	debt: { name: 'Debt', emoji: '💸' },
	loan: { name: 'Loan', emoji: '🤫' },
	medical: { name: 'Medical', emoji: '🏥' },
	rent: { name: 'Rent', emoji: '🏠' },
	shopping: { name: 'Shopping', emoji: '🛍️' },
	travel: { name: 'Travel', emoji: '🛩️' },
};

export const expensesPaidViaList = {
	cash: { name: 'Cash', emoji: '💵' },
	creditCard: { name: 'Credit Card', emoji: '💳' },
	debitCard: { name: 'Debit Card', emoji: '💳' },
	eWallet: { name: 'E-Wallet', emoji: '🪪' },
	netBanking: { name: 'NetBanking', emoji: '🏦' },
	upi: { name: 'UPI', emoji: '📲' },
};

export const groupedExpensesCategory = {
	dailyEssentials: {
		name: 'Essentials',
		list: {
			food: expensesCategory.food,
			grocery: expensesCategory.grocery,
			medical: expensesCategory.medical,
		},
	},
	expenses: {
		name: 'Expenses',
		list: {
			bills: expensesCategory.bills,
			education: expensesCategory.education,
			order: expensesCategory.order,
			rent: expensesCategory.rent,
		},
	},
	leisure: {
		name: 'Leisure',
		list: {
			entertainment: expensesCategory.entertainment,
			shopping: expensesCategory.shopping,
			travel: expensesCategory.travel,
			sports: expensesCategory.sports,
		},
	},
	payments: {
		name: 'Payments',
		list: {
			emi: expensesCategory.emi,
			savings: expensesCategory.savings,
			debt: expensesCategory.debt,
			loan: expensesCategory.loan,
		},
	},
};

export const incomeCategory = {
	'': 'Chọn',
	ads: 'Quảng cáo',
	other: 'Khác',
	passiveincome: 'Thu nhập thụ động',
	salary: 'Lương',
	youtube: 'Youtube',
};

export const investmentCategory = {
	'': 'Select',
	crypto: 'Crypto Currency',
	indianstock: 'Indian Stock',
	mutualfunds: 'Mutual Funds',
	other: 'Other',
	usstock: 'US Stock',
};

export const datePattern = 'd{2}-d{2}-d{4}';
export const dateFormatStr = 'yyyy-MM-dd';

export const payingKey = {
	monthly: 'monthly',
	yearly: 'yearly',
};

export const subscriptionPayment = {
	[payingKey.monthly]: 'Month',
	[payingKey.yearly]: 'Year',
};

export const siteUrls = {
	app: 'https://app.quanlychitieu.fun',
	home: 'quanlychitieu.fun',
	signup: 'https://app.quanlychitieu.fun/signup',
	signin: 'https://app.quanlychitieu.fun/signin',
	local: 'localhost:3000',
	appLocal: 'http://app.localhost:3000',
	localSignup: `http://app.localhost:3000/signup`,
	localSignin: `http://app.localhost:3000/signin`,
	subdomain: '.quanlychitieu.fun',
	subdomainLocal: '.localhost:3000',
	githubUrl: 'https://github.com/gokulkrishh/quanlychitieu.fun',
	twitterUrl: 'https://twitter.com/gokul_i',
};

const originalPriceMonthly = 400;
const originalPriceYearly = 50;
const discountPercentage = 40;

export const tiers = {
	monthly: { basic: 0, premium: (originalPriceMonthly / 100) * discountPercentage, og: originalPriceMonthly },
	yearly: { basic: 0, premium: (originalPriceYearly / 100) * discountPercentage, og: originalPriceYearly },
};

export const paymentOptions = { currency: 'USD', locale: 'en' };

export const tierNames = {
	basic: {
		key: 'basic',
		name: 'Basic',
		usageLimit: 100,
	},
	premium: {
		key: 'premium',
		name: 'Premium',
		usageLimit: 2500,
	},
	expired: {
		key: 'expired',
		name: 'Expired',
	},
};

export const siteName = 'Quanlychitieu.fun';

export const logo = `https://${siteUrls.home}/static/icons/logo.png`;

export const basicPlanUsageLimit = 100;
export const premiumPlanUsageLimit = 2500;

export const sentFromEmailId = 'Gokul from Quanlychitieu.fun <hello@quanlychitieu.fun>';

export const shortcuts = {
	sidebar: {
		overview: { path: '/', shortcut: 'o' },
		incomes: { path: '/incomes', shortcut: 'i' },
		expenses: { path: '/expenses', shortcut: 'e' },
		subscriptions: { path: '/subscriptions', shortcut: 's' },
		investments: { path: '/investments', shortcut: 'v' },
	},
	expenses: { add: { shortcut: 'a' } },
	incomes: { add: { shortcut: 'a' } },
	subscriptions: { add: { shortcut: 'a' } },
	investments: { add: { shortcut: 'a' } },
	overview: {
		feedback: { shortcut: 'f' },
	},
};
