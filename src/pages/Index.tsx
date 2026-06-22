import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const IRINA_IMG =
  'https://cdn.poehali.dev/projects/693d7147-7207-4068-8ae7-8a8343d2d467/bucket/1bbd6865-d394-4b40-9d7a-45f459019409.jpeg';

const GROUP_IMG =
  'https://cdn.poehali.dev/projects/693d7147-7207-4068-8ae7-8a8343d2d467/bucket/7f72059d-b611-4db5-a8eb-e626222ec86d.jpeg';

const reviews = [
  {
    screenshot: 'https://cdn.poehali.dev/projects/693d7147-7207-4068-8ae7-8a8343d2d467/bucket/79c6acf4-f814-4e9d-9723-c756fb6ca3fb.jpeg',
    text: 'Я только закончила обучение и вот-вот получу сертификат, а уже сколько всего! За время обучения я провела примерно 10 диагностик, 2 одиночных диагностики, сопровождение, а в деньгах это около 50 тыс. Переборола свои страхи и начала проявляться, вести канал. Благодарю тебя, дорогая, за билетик в лучшую жизнь!',
    highlight: '~50 000 ₽ уже во время обучения',
  },
  {
    screenshot: 'https://cdn.poehali.dev/projects/693d7147-7207-4068-8ae7-8a8343d2d467/bucket/1fbad7af-27cd-4b2c-a875-d94cfb5762e4.jpeg',
    text: 'Ирочка, я тебя благодарю за обучение. Просто бомба! Всё по полочкам, всё чётко. Где недопонимает ученик, учитель обязательно направит и поможет. И вот ещё две недели до конца обучения, а у меня уже клиенты. Первый появился в самом начале и сразу сопровождение взял.',
    highlight: 'Клиенты появились за 2 недели до конца курса',
  },
  {
    screenshot: 'https://cdn.poehali.dev/projects/693d7147-7207-4068-8ae7-8a8343d2d467/bucket/71044bf8-8f74-4ba5-b4b4-63b91d909517.jpeg',
    text: 'Только начали — а уже результат! Он ревел там не по-детски, но постаралась довести до того момента, когда ему станет легко. Тему с отцом разбирали, ему было холодно, он вспомнил ситуацию. Я просто безумно счастлива. Понятно, что путь ещё будет долгий, но он интересный и классный.',
    highlight: 'Результат с первой же сессии',
  },
  {
    screenshot: 'https://cdn.poehali.dev/projects/693d7147-7207-4068-8ae7-8a8343d2d467/bucket/8f91cd7a-85a3-401a-9c5d-fa99c9f06d41.jpeg',
    text: 'Я тебе очень благодарна за твоё дело, за то что ты делаешь — это очень ценно для всех людей. В первую очередь ты научила меня быть благодарной этому миру. Я научилась видеть, как же круто я живу, какой же прекрасный у меня муж, какая у меня работа чудесная. Это всё благодаря тебе произошла моя трансформация.',
    highlight: 'Глубокая личная трансформация',
  },
];

const weeks = [
  {
    n: '01',
    title: 'Что такое нейро-расстановки?',
    points: [
      'Природа нейропластичности мозга и восприятие символов сознанием',
      'Как выявить реальный запрос и понять, что нужно клиенту сейчас',
      'Помощь в создании собственного продукта для практики',
      'Теоретическое введение в визуализацию и демо-сессия от учителя',
    ],
  },
  {
    n: '02',
    title: 'Пространственное восприятие и внутренний мир клиента',
    points: [
      'Роль внутреннего пространства клиента и его интерпретация',
      'Техника анализа интуитивных сигналов и ощущений',
      'Первые упражнения с фигурами и пространственными конструкциями',
    ],
  },
  {
    n: '03',
    title: 'Интерпретация и диагностика',
    points: [
      'Методы выявления бессознательных установок и внутренних блоков',
      'Снятие защитных барьеров и поиск новых решений',
      'Механизмы, препятствующие изменениям, и их преодоление',
    ],
  },
  {
    n: '04',
    title: 'Глубокая работа с внутренним миром',
    points: [
      'Усиление понимания клиентом своего опыта и реакций',
      'Интеграция ресурсов для трансформации негативных убеждений',
      'Примирение конфликтующих частей себя',
    ],
  },
  {
    n: '05',
    title: 'Эмоциональные реакции и чувство тела',
    points: [
      'Работа с телесными ощущениями и эмоциями',
      'Использование движений и поз тела для усиления изменений',
      'Связь физической активности и психоэмоционального состояния',
    ],
  },
  {
    n: '06',
    title: 'Сложные случаи и дополнительные инструменты',
    points: [
      'Интеграция с традиционными методами психологии и терапии',
      'Решение сложных запросов и работа с глубокими ранами',
      'Работа с прошлыми травмами и чувством потери',
    ],
  },
  {
    n: '07',
    title: 'Закрепление навыков и проверка результатов',
    points: [
      'Тестирование знаний через реальные кейсы',
      'Выявление сильных сторон и зон роста',
      'Ответы на вопросы и устранение сомнений',
    ],
  },
  {
    n: '08',
    title: 'Подведение итогов и выдача сертификатов',
    points: [
      'Итоговое занятие с проверкой уровня подготовки',
      'Обратная связь по результатам курса',
      'Выдача 3 сертификатов по разным методам',
    ],
  },
];

const benefits = [
  { icon: 'Video', text: 'Видео-модули, тексты и материалы по работе с клиентами' },
  { icon: 'Users', text: 'Возможность прийти заместителем на расстановки бесплатно' },
  { icon: 'CalendarClock', text: 'Доступ к материалам сохраняется на 2 года' },
  { icon: 'Award', text: '3 сертификата по разным методам после обучения' },
  { icon: 'Laptop', text: 'Индивидуальные занятия онлайн в удобном темпе' },
  { icon: 'Sparkles', text: 'Помощь в создании своего продукта и старте практики' },
];

const GOLD = '#c9a84c';

const Index = () => {
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 font-display font-extrabold text-lg tracking-tight"
          >
            <span className="grid place-items-center w-9 h-9 rounded-lg border border-primary/40 bg-primary/10 text-primary">
              <Icon name="Brain" size={19} />
            </span>
            <span className="text-foreground">Нейро<span style={{ color: GOLD }}>расстановки</span></span>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollTo('about')} className="hover:text-foreground transition-colors">Метод</button>
            <button onClick={() => scrollTo('program')} className="hover:text-foreground transition-colors">Программа</button>
            <button onClick={() => scrollTo('contacts')} className="hover:text-foreground transition-colors">Контакты</button>
          </nav>
          <Button
            onClick={() => scrollTo('contacts')}
            className="hidden md:inline-flex rounded-sm px-6 text-sm tracking-wide"
            style={{ background: GOLD, color: '#1a1a1a', fontWeight: 700 }}
          >
            Записаться
          </Button>
          <button className="md:hidden text-foreground" onClick={() => setNavOpen((v) => !v)}>
            <Icon name={navOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-5 flex flex-col gap-4 text-sm font-medium animate-fade-up">
            <button onClick={() => scrollTo('about')} className="text-left text-foreground">Метод</button>
            <button onClick={() => scrollTo('program')} className="text-left text-foreground">Программа</button>
            <button onClick={() => scrollTo('contacts')} className="text-left text-foreground">Контакты</button>
            <Button onClick={() => scrollTo('contacts')} className="rounded-sm" style={{ background: GOLD, color: '#1a1a1a', fontWeight: 700 }}>
              Записаться
            </Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative grid-bg pt-28 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(148 45% 35%), transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: `radial-gradient(circle, ${GOLD}, transparent 70%)` }} />

        <div className="container relative grid md:grid-cols-2 gap-14 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border px-4 py-2 text-xs font-semibold tracking-widest uppercase animate-fade-up"
              style={{ borderColor: GOLD + '55', color: GOLD, background: GOLD + '12' }}>
              <Icon name="Shield" size={13} />
              Метод Ирины Абрамовой
            </div>

            <h1
              className="mt-7 font-display font-extrabold tracking-tight text-4xl md:text-[3.4rem] leading-[1.06] animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Расстановочный<br />
              тренинг на{' '}
              <span className="relative inline-block">
                <span className="text-primary">нейронах</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px]" style={{ background: GOLD }} />
              </span>
            </h1>

            <p className="mt-7 text-base leading-relaxed text-muted-foreground max-w-md animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Профессиональное обучение методу работы с подсознанием.
              За 8 недель вы освоите технику нейро-расстановок и начнёте
              вести индивидуальные сессии с клиентами.
            </p>

            <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => scrollTo('contacts')}
                className="px-8 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-opacity hover:opacity-90 glow-green"
                style={{ background: GOLD, color: '#1a1a1a' }}
              >
                Записаться на обучение
              </button>
              <Button
                onClick={() => scrollTo('program')}
                variant="outline"
                className="rounded-sm px-8 text-sm border-border hover:bg-secondary hover:text-foreground"
              >
                Смотреть программу
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-border flex gap-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                ['8', 'недель обучения'],
                ['3', 'сертификата'],
                ['2', 'года доступа'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display font-extrabold text-3xl" style={{ color: GOLD }}>{num}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image — портрет Ирины */}
          <div className="relative animate-fade-up flex justify-center" style={{ animationDelay: '0.25s' }}>
            {/* Glow behind */}
            <div className="absolute inset-8 blur-3xl opacity-25 rounded-full"
              style={{ background: 'hsl(148 45% 35%)' }} />
            {/* Frame */}
            <div className="relative w-full max-w-sm">
              {/* Corner marks */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 z-10" style={{ borderColor: GOLD }} />
              <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 z-10" style={{ borderColor: GOLD }} />
              <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 z-10" style={{ borderColor: GOLD }} />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 z-10" style={{ borderColor: GOLD }} />
              <div className="overflow-hidden rounded-sm border border-border shadow-2xl animate-float-slow">
                <img
                  src={IRINA_IMG}
                  alt="Ирина Абрамова — автор метода нейро-расстановок"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: '560px' }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{ background: 'linear-gradient(to top, rgba(4,14,8,0.95) 60%, transparent)' }}>
                  <p className="font-display font-bold text-base text-foreground">Ирина Абрамова</p>
                  <p className="text-xs mt-0.5 uppercase tracking-widest" style={{ color: GOLD }}>
                    Автор метода · Наставник
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-line opacity-40" />

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>Для кого</p>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Суть метода — менять жизнь через подсознание
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Нейро-расстановки работают с символами и метафорами, основанными на внутреннем
              восприятии клиента. Они помогают выявить внутренние конфликты, установки и
              бессознательные убеждения — и привести финансы, здоровье и отношения к балансу.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { icon: 'Rocket', title: 'Начинающим', text: 'Хотите помогать людям и стать наставником, находя лёгкие выходы из трудных ситуаций.' },
              { icon: 'HeartHandshake', title: 'Практикующим', text: 'Психологам, коучам и специалистам, желающим освоить новый эффективный инструмент.' },
              { icon: 'TrendingUp', title: 'Для роста', text: 'Тем, кто хочет выровнять баланс в финансах, здоровье, отношениях и реализации.' },
            ].map((c) => (
              <div key={c.title}
                className="rounded-sm border border-border p-7 bg-card hover:border-primary/50 transition-colors">
                <span className="grid place-items-center w-11 h-11 rounded-sm bg-primary/10 text-primary mb-5 border border-primary/20">
                  <Icon name={c.icon} size={22} />
                </span>
                <h3 className="font-display font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-start gap-3 border border-border rounded-sm bg-card p-4">
                <Icon name={b.icon} size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-line opacity-40" />

      {/* PROGRAM */}
      <section id="program" className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>Программа курса</p>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              8 недель — от теории до уверенной практики
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Индивидуальные онлайн-занятия: осваиваем принципы работы с символами,
              тренируем диагностику и коррекцию состояний клиента.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {weeks.map((w, i) => (
              <AccordionItem
                key={w.n}
                value={`item-${i}`}
                className="border border-border rounded-sm bg-card px-6 data-[state=open]:border-primary/40 transition-all"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-5 text-left">
                    <span className="font-display font-extrabold text-xl shrink-0" style={{ color: GOLD + 'aa' }}>
                      {w.n}
                    </span>
                    <span className="font-display font-semibold text-base text-foreground">{w.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="space-y-2.5 pl-1">
                    {w.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Icon name="ChevronRight" size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>Отзывы</p>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Что говорят участники обучения
            </h2>
          </div>

          {/* Групповое фото */}
          <div className="relative rounded-sm overflow-hidden border border-border mb-10 shadow-lg">
            <img
              src={GROUP_IMG}
              alt="Участники тренинга нейро-расстановок Ирины Абрамовой"
              className="w-full object-cover object-center"
              style={{ maxHeight: '420px' }}
            />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
              style={{ background: 'linear-gradient(to top, rgba(4,14,8,0.90) 50%, transparent)' }}>
              <p className="text-sm font-semibold text-foreground/90">Участники расстановочного тренинга</p>
              <p className="text-xs mt-0.5 text-muted-foreground">Живые встречи и практические занятия в группе</p>
            </div>
          </div>

          {/* Карточки отзывов */}
          <div className="grid md:grid-cols-2 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-sm border border-border bg-card flex flex-col hover:border-primary/40 transition-colors overflow-hidden">
                {/* Скриншот переписки */}
                <div className="relative overflow-hidden border-b border-border" style={{ maxHeight: '260px' }}>
                  <img
                    src={r.screenshot}
                    alt="Отзыв участника обучения"
                    className="w-full object-cover object-top"
                    style={{ maxHeight: '260px' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(4,14,8,0.85))' }} />
                </div>
                {/* Текст */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Highlight */}
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm self-start"
                    style={{ background: GOLD + '18', color: GOLD, border: `1px solid ${GOLD}44` }}>
                    <Icon name="TrendingUp" size={12} />
                    {r.highlight}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">«{r.text}»</p>
                  <div className="flex gap-1 pt-2">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ color: GOLD }} className="text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gold-line opacity-40" />

      {/* CTA BANNER */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm border bg-card px-8 py-14 md:px-16 md:py-20 text-center"
            style={{ borderColor: GOLD + '40' }}>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2" style={{ borderColor: GOLD }} />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2" style={{ borderColor: GOLD }} />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2" style={{ borderColor: GOLD }} />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2" style={{ borderColor: GOLD }} />

            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: GOLD }}>
              Начните помогать людям
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Практика — с первого занятия.<br />Сертификат — по итогам курса.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Самая важная цель курса — научить вас сразу внедрять знания.
              Оставьте заявку, и мы подберём удобный формат старта.
            </p>
            <button
              onClick={() => scrollTo('contacts')}
              className="mt-9 inline-block px-12 py-4 text-sm font-bold tracking-wide rounded-sm transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: '#1a1a1a' }}
            >
              Записаться на обучение
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 md:py-28 bg-secondary/50">
        <div className="container grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Контакты</p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Остались вопросы?<br />Напишите нам
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Расскажем подробнее о методе, формате и старте ближайшего потока обучения.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { icon: 'Users', label: 'ВКонтакте', value: 'vk.com/abramova_garmony', href: 'https://vk.ru/abramova_garmony' },
                { icon: 'Mail', label: 'Email', value: 'irina-kaunova@ya.ru', href: 'mailto:irina-kaunova@ya.ru' },
                { icon: 'Phone', label: 'Телефон', value: '+7 (951) 140-83-63', href: 'tel:+79511408363' },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <span className="grid place-items-center w-11 h-11 rounded-sm border border-border bg-card text-primary group-hover:border-primary/50 transition-colors">
                    <Icon name={c.icon} size={19} />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                    <div className="font-semibold text-sm group-hover:text-primary transition-colors mt-0.5">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-sm border border-border bg-card p-8 space-y-5"
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Имя</label>
              <input
                type="text"
                placeholder="Как к вам обращаться?"
                className="mt-2 w-full rounded-sm border border-input bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Контакт</label>
              <input
                type="text"
                placeholder="Телефон, Telegram или email"
                className="mt-2 w-full rounded-sm border border-input bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Сообщение</label>
              <textarea
                rows={4}
                placeholder="Ваш вопрос или пожелание"
                className="mt-2 w-full rounded-sm border border-input bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/50"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 text-sm font-bold tracking-wide rounded-sm transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: '#1a1a1a' }}
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-wider">
          <div className="flex items-center gap-2 font-display font-bold text-sm text-foreground">
            <Icon name="Brain" size={16} className="text-primary" />
            Нейро<span style={{ color: GOLD }}>расстановки</span>
          </div>
          <a href="https://vk.ru/abramova_garmony" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Icon name="Users" size={14} /> Мы ВКонтакте
          </a>
          <span>© 2026 Метод Ирины Абрамовой</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;