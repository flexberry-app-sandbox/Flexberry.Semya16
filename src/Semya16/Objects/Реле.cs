﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Semya16
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Реле.
    /// </summary>
    // *** Start programmer edit section *** (Реле CustomAttributes)

    // *** End programmer edit section *** (Реле CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РелеE", new string[] {
            "НомерР as \'Номер Р\'",
            "СостояниеР as \'Состояние Р\'"})]
    [View("РелеL", new string[] {
            "НомерР",
            "СостояниеР"})]
    public class Реле : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Semya16.Состояние fСостояниеР;
        
        private int fНомерР;
        
        private IIS.Semya16.Контроллер fКонтроллер;
        
        // *** Start programmer edit section *** (Реле CustomMembers)

        // *** End programmer edit section *** (Реле CustomMembers)

        
        /// <summary>
        /// НомерР.
        /// </summary>
        // *** Start programmer edit section *** (Реле.НомерР CustomAttributes)

        // *** End programmer edit section *** (Реле.НомерР CustomAttributes)
        public virtual int НомерР
        {
            get
            {
                // *** Start programmer edit section *** (Реле.НомерР Get start)

                // *** End programmer edit section *** (Реле.НомерР Get start)
                int result = this.fНомерР;
                // *** Start programmer edit section *** (Реле.НомерР Get end)

                // *** End programmer edit section *** (Реле.НомерР Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Реле.НомерР Set start)

                // *** End programmer edit section *** (Реле.НомерР Set start)
                this.fНомерР = value;
                // *** Start programmer edit section *** (Реле.НомерР Set end)

                // *** End programmer edit section *** (Реле.НомерР Set end)
            }
        }
        
        /// <summary>
        /// СостояниеР.
        /// </summary>
        // *** Start programmer edit section *** (Реле.СостояниеР CustomAttributes)

        // *** End programmer edit section *** (Реле.СостояниеР CustomAttributes)
        public virtual IIS.Semya16.Состояние СостояниеР
        {
            get
            {
                // *** Start programmer edit section *** (Реле.СостояниеР Get start)

                // *** End programmer edit section *** (Реле.СостояниеР Get start)
                IIS.Semya16.Состояние result = this.fСостояниеР;
                // *** Start programmer edit section *** (Реле.СостояниеР Get end)

                // *** End programmer edit section *** (Реле.СостояниеР Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Реле.СостояниеР Set start)

                // *** End programmer edit section *** (Реле.СостояниеР Set start)
                this.fСостояниеР = value;
                // *** Start programmer edit section *** (Реле.СостояниеР Set end)

                // *** End programmer edit section *** (Реле.СостояниеР Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Semya16.Контроллер.
        /// </summary>
        // *** Start programmer edit section *** (Реле.Контроллер CustomAttributes)

        // *** End programmer edit section *** (Реле.Контроллер CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Контроллер"})]
        public virtual IIS.Semya16.Контроллер Контроллер
        {
            get
            {
                // *** Start programmer edit section *** (Реле.Контроллер Get start)

                // *** End programmer edit section *** (Реле.Контроллер Get start)
                IIS.Semya16.Контроллер result = this.fКонтроллер;
                // *** Start programmer edit section *** (Реле.Контроллер Get end)

                // *** End programmer edit section *** (Реле.Контроллер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Реле.Контроллер Set start)

                // *** End programmer edit section *** (Реле.Контроллер Set start)
                this.fКонтроллер = value;
                // *** Start programmer edit section *** (Реле.Контроллер Set end)

                // *** End programmer edit section *** (Реле.Контроллер Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РелеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РелеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РелеE", typeof(IIS.Semya16.Реле));
                }
            }
            
            /// <summary>
            /// "РелеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РелеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РелеL", typeof(IIS.Semya16.Реле));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Реле.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfРеле CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfРеле CustomAttributes)
    public class DetailArrayOfРеле : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Semya16.DetailArrayOfРеле members)

        // *** End programmer edit section *** (IIS.Semya16.DetailArrayOfРеле members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Реле by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Реле.
        /// </summary>
        public DetailArrayOfРеле(IIS.Semya16.Контроллер fКонтроллер) : 
                base(typeof(Реле), ((ICSSoft.STORMNET.DataObject)(fКонтроллер)))
        {
        }
        
        public IIS.Semya16.Реле this[int index]
        {
            get
            {
                return ((IIS.Semya16.Реле)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Semya16.Реле dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
