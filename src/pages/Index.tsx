import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/693d7147-7207-4068-8ae7-8a8343d2d467/files/0d920530-ef9a-40a6-bafd-0d2e9edd8a3e.jpg';

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

const Index = () => {
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 font-display font-extrabold text-lg tracking-tight"
          >
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <Icon name="Brain" size={20} />
            </span>
            Нейро<span className="text-primary">расстановки</span>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">Метод</button>
            <button onClick={() => scrollTo('program')} className="hover:text-primary transition-colors">Программа</button>
            <button onClick={() => scrollTo('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="hidden md:inline-flex rounded-full px-6">
            Записаться
          </Button>
          <button className="md:hidden" onClick={() => setNavOpen((v) => !v)}>
            <Icon name={navOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium animate-fade-up">
            <button onClick={() => scrollTo('about')} className="text-left">Метод</button>
            <button onClick={() => scrollTo('program')} className="text-left">Программа</button>
            <button onClick={() => scrollTo('contacts')} className="text-left">Контакты</button>
            <Button onClick={() => scrollTo('contacts')} className="rounded-full">Записаться</Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative grid-bg pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-sm font-medium animate-fade-up">
              <Icon name="Sparkles" size={16} /> Метод Ирины Абрамовой
            </span>
            <h1 className="mt-6 font-display font-extrabold tracking-tight text-4xl md:text-6xl leading-[1.05] animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Расстановочный<br /> тренинг на <span className="text-primary">нейронах</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Меняем подсознание в лучшую сторону: гармонизируем финансы, здоровье,
              отношения и реализацию способностей. За 8 недель вы освоите метод и сразу начнёте практику.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button onClick={() => scrollTo('contacts')} size="lg" className="rounded-full px-8 text-base glow-teal hover-scale">
                Записаться на обучение
              </Button>
              <Button onClick={() => scrollTo('program')} size="lg" variant="outline" className="rounded-full px-8 text-base">
                Смотреть программу
              </Button>
            </div>
            <div className="mt-10 flex gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                ['8', 'недель'],
                ['3', 'сертификата'],
                ['2', 'года доступа'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display font-extrabold text-3xl text-primary">{num}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="absolute inset-0 rounded-[2rem] bg-primary/20 blur-2xl scale-95" />
            <img
              src={HERO_IMG}
              alt="Нейро-расстановки — родовая и кармическая система"
              className="relative rounded-[2rem] w-full shadow-2xl animate-float-slow"
            />
          </div>
        </div>
      </section>

      {/* ABOUT / ДЛЯ КОГО */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Для кого</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Суть метода — менять жизнь через подсознание
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Нейро-расстановки работают с символами и метафорами, основанными на внутреннем
              восприятии клиента. Они помогают выявить внутренние конфликты, установки и
              бессознательные убеждения — и привести жизнь к балансу.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Rocket', title: 'Тем, кто начинает', text: 'Хочет помогать людям и стать наставником, находя лёгкие выходы из трудных ситуаций.' },
              { icon: 'HeartHandshake', title: 'Практикующим', text: 'Психологам и специалистам, желающим расширить инструментарий новым методом.' },
              { icon: 'TrendingUp', title: 'Для роста', text: 'Тем, кто хочет гармонизировать финансы, здоровье, отношения и реализацию.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border p-7 bg-card hover:border-primary/40 transition-colors">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-accent text-primary mb-5">
                  <Icon name={c.icon} size={24} />
                </span>
                <h3 className="font-display font-bold text-xl">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-start gap-3 rounded-xl bg-secondary/60 p-5">
                <Icon name={b.icon} size={22} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Программа</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              8 недель — от теории до уверенной практики
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Индивидуальные онлайн-занятия: осваиваем принципы работы с символами, тренируем
              диагностику и коррекцию состояний клиента.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {weeks.map((w, i) => (
              <AccordionItem
                key={w.n}
                value={`item-${i}`}
                className="border border-border rounded-2xl bg-card px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-5 text-left">
                    <span className="font-display font-extrabold text-2xl text-primary/40">{w.n}</span>
                    <span className="font-display font-bold text-base md:text-lg">{w.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="space-y-3 pl-1">
                    {w.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-muted-foreground">
                        <Icon name="Check" size={18} className="text-primary shrink-0 mt-1" />
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground px-8 py-14 md:px-16 md:py-20 text-center">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
                Начните помогать людям — и себе
              </h2>
              <p className="mt-5 text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto">
                Самая важная цель курса — научить вас сразу практиковать и внедрять знания.
                Оставьте заявку, и мы подберём удобный формат старта.
              </p>
              <Button
                onClick={() => scrollTo('contacts')}
                size="lg"
                variant="secondary"
                className="mt-9 rounded-full px-10 text-base font-semibold hover-scale"
              >
                Записаться на обучение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 md:py-28 bg-secondary/40">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Контакты</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Остались вопросы? Напишите нам
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Расскажем подробнее о методе, формате и старте ближайшего потока обучения.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: 'Send', label: 'Telegram', value: '@neuro_rasstanovki' },
                { icon: 'Mail', label: 'Email', value: 'info@neuro-method.ru' },
                { icon: 'Phone', label: 'Телефон', value: '+7 (900) 000-00-00' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent text-primary">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <div>
                    <div className="text-sm text-muted-foreground">{c.label}</div>
                    <div className="font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl bg-card border border-border p-8 shadow-sm space-y-5"
          >
            <div>
              <label className="text-sm font-medium">Имя</label>
              <input
                type="text"
                placeholder="Как к вам обращаться?"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Контакт</label>
              <input
                type="text"
                placeholder="Телефон, Telegram или email"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Сообщение</label>
              <textarea
                rows={4}
                placeholder="Ваш вопрос или пожелание"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full text-base">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-bold text-foreground">
            <Icon name="Brain" size={18} className="text-primary" />
            Нейро-расстановки
          </div>
          <span>© 2026 Метод Ирины Абрамовой. Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
