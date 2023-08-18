import React, { useState, useContext } from 'react';
import { Form, Input, Row, Col, Button, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import packageAdd from './packageAdd';
import FormContext from './context/FormContext';
import axios from 'axios';


const PackageForm = () => {
  const [addedForms, setAddedForms] = useState([]);

  const handleChange = (e, formIndex) => {
    const { name, value } = e.target;
    const updatedForms = addedForms.map((form, index) => {
      if (index === formIndex) {
        return {
          ...form,
          [name]: value,
        };
      }
      return form;
    });

    setAddedForms(updatedForms); // Actualiza el estado local de los formularios agregados
  };

  const handleSendData = async () => {
    try {
      // Aquí debes construir el objeto de datos que deseas enviar al servidor
      const dataToSend = {
        addedForms, // Asumiendo que este es el array de formularios que deseas enviar
        formData, // Asumiendo que esto proviene del contexto FormContext
      };

      // Realiza la solicitud POST utilizando Axios
      const response = await axios.post('http://localhost:3000/data/send', dataToSend);

      // Maneja la respuesta si es necesario
      console.log(response.data); // Puedes mostrar la respuesta del servidor en la consola

      // Restablece los formularios o realiza otras acciones según sea necesario
      setAddedForms([]);
      setFormData({}); // Esto puede depender de cómo quieras resetear los datos en tu contexto
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      // Puedes manejar los errores de diferentes formas, como mostrar un mensaje al usuario
    }
  };

  // Agregar un nuevo elemento a la lista
  const addNewItem = () => {
    setFormData((prevData) => ({
      ...prevData,
      items: [...prevData.items, { largo: '0', alto: '0', ancho: '0', peso: '0', contenido: '0' }]
    }));
  };

  const { formData, updateFormData, setFormData } = useContext(FormContext);

  const handleAddForm = () => {
    const lastForm = addedForms[addedForms.length - 1];
    const newForm = { ...lastForm };
    addNewItem();
    setAddedForms([...addedForms, newForm]);
  };

  const handleDeleteForm = (index) => {
    const updatedForms = addedForms.filter((_, i) => i !== index);
    setAddedForms(updatedForms);
  };

  const handleFormChange = (changedValues, allValues) => {
    // Manejar los valores cambiados aquí si es necesario
    console.log(allValues); // Aquí tienes acceso a todos los valores del formulario
  };

  return (

    <>

      <div className='texto'>
        <h1 className='texto1'>Crea una orden</h1>

        <p className='texto2'>Dale una ventaja competitiva a tu negocio con entregas el mismo día  (Área Metropolitana) y el día siguiente a nivel nacional.</p>
      </div>

      <div className='container'>
        <div className='form'>
          <Form layout='vertical'>
            <Row>
              <Col span={8}>
                <Space.Compact block size='small' align='center'>
                  <Form.Item
                    label='Largo'
                    rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                  >
                    <Input
                      suffix='CM'
                      style={{ color: 'rgba(0,0,0,.45)', height: '50px' }}
                      type='number'
                      name='largo'
                      value={addedForms[0]?.largo || ''}
                      onChange={(e) => handleChange(e, 0)}
                    />

                  </Form.Item>

                  <Form.Item
                    label='Alto'
                    rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                  >
                    <Input
                      suffix='CM'
                      style={{ color: 'rgba(0,0,0,.45)', height: '50px' }}
                      type='number'
                      name='alto'
                      value={addedForms.alto}
                      onChange={(e) => {
                        handleChange(e, addedForms.length - 1)
                        setFormData({ ...formData, alto: e.target.value });
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label='Ancho'
                    rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                  >
                    <Input
                      suffix='CM'
                      style={{ color: 'rgba(0,0,0,.45)', height: '50px' }}
                      type='number'
                      name='ancho'
                      value={addedForms.ancho}
                      onChange={(e) => {
                        handleChange(e, addedForms.length - 1)
                        setFormData({ ...formData, ancho: e.target.value });
                      }}
                    />
                  </Form.Item>
                </Space.Compact>
              </Col>
              <Col span={8}>
                <Space align='center'>
                  <Form.Item
                    label='Peso en libras'
                    rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                  >
                    <Input
                      suffix='Lb'
                      style={{ color: 'rgba(0,0,0,.45)', height: '50px' }}
                      type='number'
                      name='peso'
                      value={addedForms.peso}
                      onChange={(e) => {
                        handleChange(e, addedForms.length - 1)
                        setFormData({ ...formData, peso: e.target.value });
                      }}
                    />
                  </Form.Item>
                </Space>
              </Col>
              <Col span={8}>
                <Space align='center'>
                  <Form.Item
                    label='Contenido'
                    rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                  >
                    <Input
                      style={{ height: '50px' }}
                      name='contenido'
                      value={addedForms.contenido}
                      onChange={(e) => {
                        handleChange(e, addedForms.length - 1)
                        setFormData({ ...formData, alto: e.target.value });
                      }}
                    />
                  </Form.Item>
                </Space>
              </Col>
            </Row>
            <Button
              icon={<PlusOutlined />}
              size='large'
              style={{
                backgroundColor: '#E1E4EC',
                left: '80%',
                top: '50px',
                flexShrink: '0',
                color: '#7682A0'
              }}
              onClick={() => {
                handleAddForm();
                addNewItem();
              }}
            >
              Agregar
            </Button>

          </Form>
        </div>

        {addedForms.map((form, formIndex) => (
          <div key={formIndex} className='added'>
            <Form layout='vertical'>
              <Row>

                <Col span={8}>
                  <Space align='center'>
                    <Form.Item
                      label='Peso en libras'
                      rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                    >
                      <Input
                        suffix='Lb'
                        style={{ color: 'rgba(0,0,0,.45)', height: '50px' }}
                        type='number'
                        name='peso'
                        value={addedForms[formIndex].peso}
                        onChange={(e) => handleChange(e, formIndex)}

                      />
                    </Form.Item>
                  </Space>
                </Col>

                <Col span={8}>
                  <Space align='center'>
                    <Form.Item
                      label='Contenido'
                      rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                    >
                      <Input
                        style={{ height: '50px' }}
                        name='contenido'
                        value={addedForms[formIndex].contenido}
                        onChange={(e) => handleChange(e, formIndex)}

                      />
                    </Form.Item>
                  </Space>
                </Col>


                <Col span={8}>
                  <Space align='center'>
                    <Form.Item
                      label='Largo'
                      rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}

                    >
                      <Input
                        suffix='CM'
                        style={{ color: 'rgba(0,0,0,.45)', height: '50px' }}
                        type='number'
                        name='largo'
                        value={addedForms[formIndex].largo}
                        onChange={(e) => handleChange(e, formIndex)}

                      />
                    </Form.Item>

                    <Form.Item
                      label='Alto'
                      rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                    >
                      <Input
                        suffix='CM'
                        style={{ color: 'rgba(0,0,0,.45)', height: '50px' }}
                        type='number'
                        name='alto'
                        value={addedForms[formIndex].alto}
                        onChange={(e) => handleChange(e, formIndex)}

                      />
                    </Form.Item>
                    <Form.Item
                      label='Ancho'
                      rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
                    >
                      <Input
                        suffix='CM'
                        style={{ color: 'rgba(0,0,0,.45)', height: '50px' }}
                        type='number'
                        name='ancho'
                        value={addedForms[formIndex].ancho}
                        onChange={(e) => handleChange(e, formIndex)}

                      />
                    </Form.Item>
                  </Space>
                </Col>

              </Row>
              <Button
                icon={<DeleteOutlined />}
                size='large'
                style={{
                  backgroundColor: '#E1E4EC',
                  left: '80%',
                  flexShrink: 0,
                  color: '#7682A0'
                }}
                onClick={() => handleDeleteForm(formIndex)}
              >
                Eliminar
              </Button>
            </Form>
          </div>
        ))}


        <Button
          icon={<DeleteOutlined />}
          size='large'
          style={{
            backgroundColor: '#4270F9',
            left: '80%',
            flexShrink: 0,
            color: 'white',
            width: '140px',
            height: '55px',
            marginTop: '30px'
          }}
          onClick={handleSendData} // Llama a la función al hacer clic en el botón

        >
          Enviar
        </Button>
      </div>



    </>
  );
};

export default PackageForm;