﻿/// <reference path="base/container/UniqueSet.ts" />

namespace std
{
	/**
	 * <p> Set, in other word, Tree Set. </p>
	 *
	 * <p> Sets are containers that store unique elements following a specific order. </p>
	 *
	 * <p> In a set, the value of an element also identifies it (the value is itself the key, of type T), and each 
	 * value must be unique. The value of the elements in a set cannot be modified once in the container 
	 * (the elements are always const), but they can be inserted or removed from the container. </p>
	 *
	 * <p> Internally, the elements in a set are always sorted following a specific strict weak ordering criterion 
	 * indicated by its internal comparison object (of type Compare). </p>
	 *
	 * <p> Set containers are generally slower than unordered_set containers to access individual elements by 
	 * their key, but they allow the direct iteration on subsets based on their order. </p>
	 *
	 * <p> Sets are typically implemented as binary search trees. </p>
	 *
	  * <ul>
     *  <li> Designed by C++ Reference: http://www.cplusplus.com/reference/set/set/ </li>
     * </ul>
	 *
	 * @param <T> Type of the elements. 
     *			  Each element in an <code>Set</code> is also uniquely identified by this value.
	 *
	 * @author Migrated by Jeongho Nam
	 */
    export class Set<T>
        extends base.container.UniqueSet<T>
    {
		private tree: base.tree.AtomicTree<T>;

        /* =========================================================
		    CONSTRUCTORS & SEMI-CONSTRUCTORS
                - CONSTRUCTORS
                - ASSIGN & CLEAR
	    ============================================================
            CONSTURCTORS
        --------------------------------------------------------- */
        /**
         * Default Constructor
         */
        public constructor();

        public constructor(array: Array<T>);

        public constructor(container: base.container.Container<T>);

        public constructor(begin: Iterator<T>, end: Iterator<T>);
        
        public constructor(...args: any[])
        {
            super();

			this.tree = new base.tree.AtomicTree<T>();
        }

        /* ---------------------------------------------------------
		    ASSIGN & CLEAR
	    --------------------------------------------------------- */
        ///**
        // * @inheritdoc
        // */
        //public assign<U extends T>(begin: Iterator<U>, end: Iterator<U>): void
        //{
        //    super.assign(begin, end);
        //}

        /**
         * @inheritdoc
         */
        public clear(): void
        {
            super.clear();

			this.tree = new base.tree.AtomicTree<T>();
        }
		
        /* =========================================================
		    ACCESSORS
	    ========================================================= */
        /**
         * @inheritdoc
         */
        public find(val: T): Iterator<T>
        {
            var node = this.tree.find(val);

			if (node == null || std.equals(node.value.value, val) == false)
				return this.end();
			else
				return node.value;
        }

        /* =========================================================
		    ELEMENTS I/O
				- INSERT
                - POST-PROCESS
	    ============================================================
		    INSERT
	    --------------------------------------------------------- */
        protected insertByVal(val: T): any
		{
			var node = this.tree.find(val);

			// IF EQUALS, THEN RETURN FALSE
			if (node != null && std.equals(node.value.value, val) == true)
				return new Pair<Iterator<T>, boolean>(node.value, false);
			
			// INSERTS
			var it: SetIterator<T>;

			if (node == null)
				it = <SetIterator<T>>this.end();
			else if (std.less(node.value.value, val) == true)
				it = <SetIterator<T>>node.value.next();
			else
				it = node.value;

			// ITERATOR TO RETURN
			it = <SetIterator<T>>this.insert(it, val);

			return new Pair<Iterator<T>, boolean>(it, true);
		}

		/* ---------------------------------------------------------
		    POST-PROCESS
	    --------------------------------------------------------- */
		/**
         * @inheritdoc
         */
        protected handleInsert(item: SetIterator<T>): void
        {
            this.tree.insert(item);
        }

        /**
         * @inheritdoc
         */
        protected handleErase(item: SetIterator<T>): void
        {
            this.tree.erase(item);
        }
    }
}