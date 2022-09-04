const userControllers = require('./user.controllers')

const getAll = (req, res) => {
    const data = userControllers.getAllUsers()
        .then((response) => {
            res.status(200).json({
                items: response.length,
                users: response
            })
        })
        .catch((err) => {
            console.log(err)
        })
}


const getById = (req, res) => {
    const id = req.params.id;

    const data = userControllers.getUserById(id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            console.log({ err })
        })
}

const register = (req, res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({ message: 'Missing Data' })
    } else if (
        !data.firstName ||
        !data.lastName ||
        !data.gender ||
        !data.email ||
        !data.password ||
        !data.phone ||
        !data.birthdayDate
    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                firstName: 'string',
                lastName: 'string',
                gender: 'string',
                email: 'example@gmail.com',
                password: 'string',
                phone: 'string',
                birthdayDate: 'DD/MM/YYYY'
            },
        });
    } else {
        const response = userControllers.createUser(data)
            .then((response) => {
                res.status(201).json({
                    message: `user created succesfuly with id: ${response.id}`,
                    user: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    };


}

const remove = (req, res) => {
    const id = req.params.id;
    const data = userControllers.deleteUser(id)
        .then(response => {
            if (response) {
                res.status(204).json();
            } else {
                res.status(400).json({ message: "invalid ID" })
            }

        })
}

const edit = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    if (!Object.keys(data).length) {
        return res.staus(400).json({ message: 'Missing Data' })
    } else if (
        !data.firstName ||
        !data.lastName ||
        !data.gender ||
        !data.email ||
        !data.phone ||
        !data.profileImg ||
        !data.addres ||
        !data.status ||
        !data.role
    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                firstName: 'string',
                lastName: 'string',
                gender: 'string',
                email: 'example@gmail.com',
                phone: 'string',
                role: 'normal',
                profileImg: 'example.com/img/example.png',
                birthdayDate: 'DD/MM/YYYY',
                addres: 'string',
                status: 'string',
            },
        });
    } else {
        const response = userControllers.editUser(id, data)

        return res.status(200).json({
            message: 'user edited succesfuly',
            user: response
        })
    }
}

const editMyUser = (req, res) => {
    const id = req.user.id
    const data = req.body

    if (!Object.keys(data).length) {
        return res.staus(400).json({ message: 'Missing Data' })
    } else if (
        !data.firstName ||
        !data.lastName ||
        !data.gender ||
        !data.email ||
        !data.phone ||
        !data.profileImg ||
        !data.addres ||
        !data.status ||
        !data.role
    ) {
        return res.status(400).json({
            message: 'All fiels must be completed', fields: {
                firstName: 'string',
                lastName: 'string',
                gender: 'string',
                email: 'example@gmail.com',
                phone: 'string',
                role: 'normal',
                profileImg: 'example.com/img/example.png',
                birthdayDate: 'DD/MM/YYYY',
                addres: 'string',
                status: 'string',
            },
        });
    } else {
        const response = userControllers.editUser(id, data, req.user.rol)

        return res.status(200).json({
            message: 'user edited succesfuly',
            user: response
        })
    }

}


const deleteMyUser = (req, res) => {
    const id = req.user.id;
    const data = userControllers.deleteUser(id);

    if (data) {
        return res.status(204).json();
    } else {
        return res.status(400).json({ message: "Invalid id" });
    }
}

const getMyUser = (req, res) => {
    const id = req.user.id;

    const data = userControllers.getUserById(id)
    res.status(200).json(data)


}

const postProfileImg = (req, res) => {
    const id = req.user.id;
    const imgPath = req.hostname + ':3000' + 'api/v1/uploads/' + req.file.filename
    const data = userControllers.editProfileImg(id, imgPath)
    res.status(200).json(data)
}


module.exports = {
    getAll,
    getById,
    register,
    remove,
    edit,
    editMyUser,
    deleteMyUser,
    getMyUser,
    postProfileImg
}