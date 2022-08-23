import React from 'react';
import { Table } from './Table';
import { words, columnsWord } from './data';


const Component: React.FC = () => {

  


    return (
        <div>
            <Table
                data={words}
                columns={columnsWord}
            />
            {/* <Table
                data={users}
                columns={columnsUser}
            /> */}
        </div>
    );
};

export default Component;