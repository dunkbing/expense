import { cookies } from 'next/headers';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handle(req, res) {
	if (req.method === 'POST') {
		const { email, password } = req.body;

		try {
			const supbaseAdmin = createServerSupabaseClient({ req, res });
			const { data, error } = await supbaseAdmin.auth.signInWithPassword({
				email,
				password,
			});

			if (error) {
				throw error;
			}

			res.status(200).json({ message: 'Success', data });
		} catch (error) {
			res.status(500).json({ message: String(error) || 'Error occurred, please try again.' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
	}
}
