import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

       const data =  ({
            title,
            description,
            value,
        })

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (err) {
            alert("Erro no cadastro. Tente Novamente.");
        }
    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section className="form">
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastrar Nova Necessidade</h1>
                    <p>Descreva sua necessidade para encontrar um herói.</p>

                    <Link className="back-link" to='/profile'>
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Necessidades Cadastradas
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título da Necessidade" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <div className="input-group">
                        <button className="button" >Cancelar</button>
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }