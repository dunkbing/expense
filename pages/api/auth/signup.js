import { createClient } from '@supabase/supabase-js';

import prisma from 'lib/prisma';

const supbaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handle(req, res) {
	if (req.method === 'POST') {
		const { email, password } = req.body;

		try {
			const { data, error } = await supbaseAdmin.auth.signUp({
				email,
				password,
			});

			if (error) {
				throw error;
			}

			const createdUser = await prisma.users.create({ data: { id: data.user.id, email: data.user.email } });
			console.log(createdUser);
			res.status(200).json({ message: 'Success', data });
		} catch (error) {
			res.status(500).json({ message: String(error) || 'Error occurred, please try again.' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
	}
}
