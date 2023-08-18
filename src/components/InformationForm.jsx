import React, { useState, useContext } from 'react';
import Icon, { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import FormContext from './context/FormContext';
import { Form, Input, DatePicker, Row, Col } from 'antd';
import { Button, Select, Space } from 'antd';
import '../App.css'

const InformationForm = () => {
  const onFinish = (values) => {
  };


  const { formData, updateFormData, setFormData } = useContext(FormContext);


  const navigate = useNavigate();

  const [selectedDepartment, setSelectedDepartment] = useState('San salvador');
  const [selectedTown, setSelectedTown] = useState('');



  const handleDepartmentChange = (value) => {
    setFormData((prevData) => ({ ...prevData, selectedDepartment: value, selectedTown: '' }));
  };

  const handleTownChange = (value) => {
    setFormData((prevData) => ({ ...prevData, selectedTown: value }));
  };


  const handleSubmit = () => {
    // Realiza el procesamiento del formulario o cualquier otra acción necesaria
    // Luego, navega a la ruta '/package'
    navigate('/package');
  };

  const departmentOptions = [
    {
      value: 'San salvador',
      label: 'San Salvador',
    },
    {
      value: 'San Miguel',
      label: 'San Miguel',
    },
    {
      value: 'La Paz',
      label: 'La Paz',
    },
  ];

  const municipalityOptions = {
    'San salvador': [
      { value: 'Soyapango', label: 'Soyapango' },
      { value: 'San Marcos', label: 'San Marcos' },
      // Agrega más municipios aquí
    ],
    'San Miguel': [
      { value: 'San Miguel Municipio 1', label: 'San Miguel Municipio 1' },
      { value: 'San Miguel Municipio 2', label: 'San Miguel Municipio 2' },
      // Agrega más municipios aquí
    ],
    'La Paz': [
      { value: 'La Paz Municipio 1', label: 'La Paz Municipio 1' },
      { value: 'La Paz Municipio 2', label: 'La Paz Municipio 2' },
      // Agrega más municipios aquí
    ],
    // Agrega más ciudades aquí
  };

  console.log(formData)


  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },
  ];

  return (

    <>

      <div className='texto'>
        <h1 className='texto1'>Crea una orden</h1>

        <p className='texto2'>Dale una ventaja competitiva a tu negocio con entregas el mismo día  (Área Metropolitana) y el día siguiente a nivel nacional.</p>
      </div>
      <div className='container'>


        <Form onFinish={onFinish} layout="vertical" >
          <Row >
            <Col span={16}>
              <Form.Item
                label="Dirección de recoleccion"
                name="address"
                rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
              >

                <Input placeholder="Ingresa la dirección" style={{ height: '50px' }} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Fecha programada"
                name="date"
                rules={[{ required: true, message: 'Por favor selecciona una fecha' }]}
              >
                <DatePicker placeholder="Selecciona una fecha" style={{ height: '50px' }} onChange={(date) => setFormData({ ...formData, date })} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Nombres"
                name="name"
                rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}



              >
                <Input placeholder="Ingresa el nombre" style={{ height: '50px' }} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Apellidos"
                name="lastName"
                rules={[{ required: true, message: 'Por favor ingresa el apellido' }]}
              >
                <Input placeholder="Ingresa el apellido" style={{ height: '50px' }} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Correo electronico"
                name="email"
                rules={[{ required: true, message: 'Por favor ingresa el correo electronico' }]}
              >
                <Input placeholder="Ingresa el correo electronico" style={{ height: '50px' }} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </Form.Item>
            </Col>

          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                label="Numero"
                name="number"
                rules={[{ required: true, message: 'Por favor el numero' }]}
              >
                <Space.Compact style={{ height: '50px' }} >
                  <Input style={{ height: '50px' }} onChange={(e) => setFormData({ ...formData, number: e.target.value })} />
                </Space.Compact>
              </Form.Item>

            </Col>

            <Col span={18}>
              <Form.Item
                label="Dirección del destinatario"
                name="addressDestinatation"
                rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
              >
                <Input placeholder="Ingresa la dirección" style={{ height: '50px' }} onChange={(e) => setFormData({ ...formData, addressDestinatation: e.target.value })} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Departamento"
                name="department"
                rules={[{ required: true, message: 'Por favor seleccionar el departamento' }]}
              >

                <Space wrap>
                  <Select
                    defaultValue={selectedDepartment}
                    style={{
                      width: 200,
                    }}
                    onChange={handleDepartmentChange}
                    options={departmentOptions}
                  />
                </Space>

              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Municipio"
                name="town"
                rules={[{ required: true, message: 'Por favor selecciona el municipio' }]}
              >
                <Select
                  value={selectedTown}
                  style={{ width: 200 }}
                  onChange={handleTownChange}
                  options={municipalityOptions[selectedDepartment] || []}
                />

              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Punto de referencia"
                name="referencePoint"
                rules={[{ required: true, message: 'Por favor ingresa el punto de referencia' }]}
              >
                <Input placeholder="Ingresa el punto de referencia" style={{ height: '50px' }} onChange={(e) => setFormData({ ...formData, referencePoint: e.target.value })} />
              </Form.Item>
            </Col>

          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Indicaciones"
                name="indications"
              >
                <Input placeholder="Ingresa la indicacion" style={{ height: '50px' }} onChange={(e) => setFormData({ ...formData, indications: e.target.value })} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              siguiente
            </Button>
          </Form.Item>
        </Form>

      </div>
    </>
  );
};

export default InformationForm;
