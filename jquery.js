<!doctype html>
<html lang="fr">
    <head>
        <title>jQuery example</title>
        <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


                <!-- Bootstrap CSS -->
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>


        <div class="container-fluid">
            <div id="app">
                <div>
                    <h1>jQuery example</h1>
                    <hr />
                    <button id="fetch-users" class="btn btn-primary">Fetch users</button>
                </div>
                <table id="tbl-users" class="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Tel</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>


            </div>
        </div>


        <script src="https://cdn.jsdelivr.net/npm/jquery"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.js"></script>


        <script>

            async function fetchUsers() {
            const { data: { results } } = await axios.get('https://randomuser.me/api/?results=20');

            const tbody = $('#tbl-users tbody');
            const users = results.map(user => (
            `<tr>
           <td><img src='${user.picture.thumbnail}'</td>
           <td>${user.name.first} ${user.name.last}</td>
           <td>${user.email}</td>
           <td>${user.phone}</td>
        </tr>`
            ));

            tbody.html(users.join(''));
        }

            $(document).ready(function () {
            $('#fetch-users').click(fetchUsers);
        });

        </script>
    </body>
</html>