import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

const drawerFilter = () => {
    return (
        <Drawer
            anchor="left"
            open={mostrarFiltros}
            onClose={() => console.log("Cerrar Drawer")} // Agrega la lógica para cerrar el Drawer según tu necesidad
        >
            <div>
                <Typography variant="h6" sx={{ margin: '20px' }}>
                    Contenido del Filtro
                </Typography>
                {/* Aquí puedes agregar los elementos de filtro que necesites */}
            </div>
        </Drawer>
    );
};

export default drawerFilter;
