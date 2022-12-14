import jwt from 'jsonwebtoken';
import Database from '../../constants/db';

const db = new Database();

const JWT_SECRET = 'My_Super_SecretJWT_2022_HCI';

const handler = (req, res) => {
    // Should be post method
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
    }

    // Should have email and password
    if (!req.body.email || !req.body.password) {
        res.status(400).json({ message: 'Bad request' });
    }

    const user = db.getUserByEmailAndPassword(req.body.email, req.body.password);
    if (!user) {
        res.status(401).json({ message: 'Unauthorized user' });
    }

    // Generate JWT for the user
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: '2h',
    });

    res.status(200).json({ token });
};

export default handler;
