import PostgresIcon from '../../../images/stack/postgresql-wordmark.svg'
import SqlServerIcon from '../../../images/stack/microsoftsqlserver-wordmark.svg'
import MongoDbIcon from '../../../images/stack/mongodb-wordmark.svg'
import CSharpIcon from '../../../images/stack/Logo_C_sharp.svg'
import PythonIcon from '../../../images/stack/python-wordmark.svg'
import TensorIcon from '../../../images/stack/tensorflow.svg'
import PyTorchIcon from '../../../images/stack/pytorch-light.svg'
import ScikitIcon from '../../../images/stack/scikitlearn.svg'
import OneCIcon from '../../../images/stack/oneC.svg'
import NginxIcon from '../../../images/stack/nginx.svg'
import ReactIcon from '../../../images/stack/file-type-reactjs.svg'

import Flutter from '../../../images/stack/flutter.svg'
import React from 'react'

type IconType = (_props: React.SVGProps<SVGSVGElement>) => JSX.Element

export interface ITechnologyLabel {
  name: string
  icon: IconType
}

export interface ISubsection {
  id: number
  title: string
  technologies: ITechnologyLabel[]
  description: string
}

const topics: ISubsection[] = [
  {
    id: 1,
    title: 'Хранение данных',
    technologies: [
      {
        name: 'PostgreSQL',
        icon: PostgresIcon,
      },
      { name: 'Microsoft SQL Server', icon: SqlServerIcon },
      { name: 'MongoDB', icon: MongoDbIcon },
    ],
    description: `Данные БД мы используем для хранения и оперативного отображения информации в клиентских приложениях. 
        Выстроенная нашими архитекторами структура баз данных позволяет без задержек обращаться к огромным массивам данных.`,
  },
  {
    id: 2,
    title: 'Загрузка и нормализация данных',
    technologies: [
      { name: 'С#', icon: CSharpIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'TensorFlow', icon: TensorIcon },
      { name: 'PyTorch', icon: PyTorchIcon },
      { name: 'Scikit-learn', icon: ScikitIcon },
    ],
    description: `Для загрузки и преобразования данных мы используем собственные разработки на языках С# и Python, которые позволили создать
        многопоточную загрузку в разы превосходящую по скорости загрузки все стандартные методы. С помощью данных технологий реализованы внутренние
        инструменты по стандартизации и классификации данных, что в купе с машинным обучением позволило достичь высокого уровня точности сопоставления данных (96%) и подготовки их для дальнейшего анализа.`,
  },

  {
    id: 3,
    title:
      'Автоматизация бизнес процессов и разработка пользовательских интерфейсов',
    technologies: [
      { name: 'Платформа “1С”', icon: OneCIcon },
      { name: 'Nginx', icon: NginxIcon },
      { name: 'ReactJS', icon: ReactIcon },
      { name: 'Flutter', icon: Flutter },
    ],
    description: `Конечные пользователи в итоге получают всю информацию через интерфейс реализованный на платформе 1с.
        Клиентское приложение имеет связь с базой по протоколам HTTP, HTTPS, для чего на стороне сервера установлен и настроен Web-сервер Apache.
        Данное решение позволяет работать пользователям с программой через WEB-интерфейс.
        В программе реализована возможность взаимодействия с внешними сервисами посредством API.`,
  },
]

export default topics
